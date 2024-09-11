import { Label } from "@radix-ui/react-label";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  Link,
  redirect,
  useFormAction,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { add, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { api } from "~/api.server";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { formatPrice } from "~/lib/utils";

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
  const releasedAt = add(reservation.createdAt, { minutes: 10 });
  const isExpired = new Date() > releasedAt;
  if (isExpired) {
    api.reservations.updateReservation({
      id,
      reservationUpdateChangeset: { status: "cancelled" },
    });
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
    });
  }
  return json({ reservation, releasedAt });
}

export async function action({ request, params }: ActionFunctionArgs) {
  if (request.method === "delete") {
    // cancel reservation
    return redirect("/");
  }
  // confirm reservation
  const id = params.id;
  if (!id) {
    throw new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }
    // TODO: create customer
  const customer = await api.customers.createCustomer({
    customerChangeset: {},
  });
  await api.reservations.updateReservation({
    id,
    reservationUpdateChangeset: {
      customerId: customer.id,
      status: "confirmed",
    },
  });
  return json({ success: true });
}

export default function Reservation() {
  const data = useLoaderData<typeof loader>();
  const [expired, setExpired] = useState(
    new Date() > new Date(data.releasedAt)
  );
  const [releaseTime, setReleaseTime] = useState(
    formatDistanceToNow(data.releasedAt)
  );
  useEffect(() => {
    setTimeout(() => {
      setReleaseTime(formatDistanceToNow(data.releasedAt));
      setExpired(new Date() > new Date(data.releasedAt));
    }, 10000);
  }, []);

  const submit = useSubmit();

  useEffect(() => {
    if (expired) {
      submit(
        { intent: "cancel", id: data.reservation.id },
        { method: "delete", encType: "application/json" }
      );
    }
  }, [expired]);

  if (expired) {
    return (
      <div>
        <h1 className="text-lg">Reservation</h1>
        <p className="my-4">Your reservation has expired.</p>
        <Button asChild>
          <Link to="/">Start over</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reservation</CardTitle>
        <CardDescription>
          Confirm your reservation within {releaseTime} or it will be released.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          <div className="flex justify-between p-2">
            <span>Date</span>
            <span>
              {new Date(data.reservation.startTime).toLocaleDateString(
                "en-US",
                {
                  dateStyle: "short",
                }
              )}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span>Start</span>
            <span>
              {new Date(data.reservation.startTime).toLocaleTimeString(
                "en-US",
                {
                  timeStyle: "short",
                }
              )}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span>End</span>
            <span>
              {new Date(data.reservation.endTime).toLocaleTimeString("en-US", {
                timeStyle: "short",
              })}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span>Total</span>
            <span>{formatPrice(data.reservation.totalPrice)}</span>
          </div>
        </div>
        <Form method="post" className="grid gap-4 mt-8">
          <div className="grid gap-1">
            <Label htmlFor="name">Name</Label>
            <Input placeholder="Name" autoFocus name="name" id="name" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Email" name="email" id="email" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="phone">Phone</Label>
            <Input placeholder="Phone" name="phone" id="phone" />
          </div>
          <Button type="submit" className="w-full mt-4">
            Confirm Reservation
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
