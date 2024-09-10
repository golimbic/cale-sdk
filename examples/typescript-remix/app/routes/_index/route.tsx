import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { api } from "~/api.server";
import SelectServiceCard from "./select-service-card";
import SelectOfferCard from "./select-offer-card";
import SelectSlotCard from "./select-slot-card";
import { Slot, SlotsPayloadFromJSON } from "@cale-app/sdk";
import { add, endOfDay, startOfDay } from "date-fns";

export const meta: MetaFunction = () => {
  return [
    { title: "Cale Salon | Cale TypeScript SDK example" },
    { name: "description", content: "Cale TypeScript SDK example" },
  ];
};

enum Step {
  Service,
  Offer,
  Slot,
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const serviceId = url.searchParams.get("serviceId");
  const offerId = url.searchParams.get("offerId");

  // First step: select a service
  if (!serviceId && !offerId) {
    const services = await api.services.getServices();
    return json({ step: Step.Service as const, services });
  }

  // Second step: select an offer
  if (!offerId) {
    if (!serviceId) {
      throw new Response(null, {
        status: 400,
        statusText: "Bad Request",
      });
    }
    const service = await api.services.getService({ id: serviceId });
    if (!service) {
      throw new Response(null, {
        status: 404,
        statusText: "Not Found",
      });
    }
    const offers = await api.offers.getOffers({ serviceId });
    return json({ step: Step.Offer as const, offers, service });
  }

  // Third step: select a time slot and make a reservation
  const offer = await api.offers.getOffer({ id: offerId });
  if (!offer) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const date = url.searchParams.get("date");
  const from = date ? startOfDay(date) : undefined;
  const until = from ? startOfDay(add(from, { days: 1 })) : undefined;
  const data = await api.offers.getSlots({ id: offerId, from, until });
  const filterSlot = (slot: Slot) => {
    if (from) return true;
    const firstSlot = data.slots[0];
    if (!firstSlot) return false;
    return slot.start <= endOfDay(firstSlot.start);
  };
  return json({
    step: Step.Slot,
    offer,
    slots: { ...data, slots: data.slots.filter(filterSlot) },
  } as const);
}

export async function action({ request }: ActionFunctionArgs) {}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="max-w-sm mx-auto">
      <header>
        <h1>Cale Salon</h1>
        <small>Cale TypeScript SDK example</small>
      </header>
      {data.step === Step.Service && (
        <SelectServiceCard services={data.services} />
      )}
      {data.step === Step.Offer && <SelectOfferCard offers={data.offers} />}
      {data.step === Step.Slot && (
        <SelectSlotCard data={SlotsPayloadFromJSON(data.slots)} />
      )}
    </main>
  );
}
