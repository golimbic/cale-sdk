import { LoaderFunctionArgs } from "@remix-run/node";
import ical from "ical-generator";
import { api } from "~/api.server";
import { formatPrice } from "~/lib/utils";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const id = params.id;
  if (!id) {
    throw new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }
  const reservation = await api.reservations.getReservation({ id });
  if (!reservation) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  const offer = await api.offers.getOffer({ id: reservation.offerId });

  const serviceReq = api.services.getService({ id: offer.serviceId });
  const providerReq = api.providers.getProvider({ id: offer.providerId });
  const [service, provider] = await Promise.all([serviceReq, providerReq]);

  const calendar = ical({ name: "Cale Salon reservation" });
  calendar.createEvent({
    start: reservation.startTime,
    end: reservation.endTime,
    summary: "Cale Salon reservation",
    location: "Cale Salon",
    url: new URL(`/reservations/${id}`, request.url).toString(),
    description: `
        Service: ${service?.name} (${offer?.duration} minutes)
        Provider: ${provider?.name}
        Total price: ${formatPrice(reservation.totalPrice)}
        `,
  });

  return new Response(calendar.toString(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "attachment; filename=cale.ics",
    },
    status: 200,
  });
}
