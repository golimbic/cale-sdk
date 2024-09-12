import { parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import { add } from "date-fns";
import { z } from "zod";
import { api } from "~/api.server";
import ReservationHold from "./reservation-hold";
import { ReservationFromJSON, ReservationToJSON } from "@cale-app/sdk";
import ReservationConfirmed from "./reservation-confirmed";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (!id) {
    throw new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  const reservation = await api.reservations.getReservation({ id });
  if (!reservation || reservation.status === "cancelled") {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  if (reservation.status === "confirmed" && reservation.endTime < new Date()) {
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
    });
  }

  const releasedAt = add(reservation.createdAt, { minutes: 10 });
  const isHoldExpired =
    reservation.status === "hold" && new Date() > releasedAt;
  if (isHoldExpired) {
    api.reservations.updateReservation({
      id,
      reservationUpdateChangeset: { status: "cancelled" },
    });
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
    });
  }

  return json({ reservation: ReservationToJSON(reservation), releasedAt });
}

const customerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
});

export async function action({ request, params }: ActionFunctionArgs) {
  const id = params.id;
  if (!id) {
    throw new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  // cancel reservation
  if (request.method === "DELETE") {
    api.reservations.updateReservation({
      id,
      reservationUpdateChangeset: { status: "cancelled" },
    });
    return redirect("/");
  }

  // confirm reservation
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: customerSchema });
  if (submission.status !== "success") {
    return json(submission.reply());
  }
  const customer = await api.customers.createCustomer({
    customerChangeset: {
      firstName: submission.value.name,
      email: submission.value.email,
      phone: submission.value.phone,
    },
  });
  await api.reservations.updateReservation({
    id,
    reservationUpdateChangeset: {
      customerId: customer.id,
      status: "confirmed",
    },
  });
  return redirect(`/reservations/${id}`);
}

export default function Reservation() {
  const data = useLoaderData<typeof loader>();
  const reservation = ReservationFromJSON(data.reservation);
  switch (data.reservation.status) {
    case "hold":
      return (
        <ReservationHold
          reservation={reservation}
          releasedAt={data.releasedAt}
        />
      );
    case "confirmed":
      return <ReservationConfirmed reservation={reservation} />;
    default:
      // TODO: confirmed, etc
      return null;
  }
}
