import { Form } from "@remix-run/react";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Offer } from "@cale-app/sdk";
import { formatDuration } from "date-fns";
import { formatPrice } from "~/lib/utils";

const schema = z.object({
  offerId: z.string({ message: "Please select a offer" }),
});

export default function SelectOfferCard({
  offers,
}: {
  offers: Pick<Offer, "id" | "price" | "duration">[];
}) {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>Offers</CardTitle>
        <CardDescription>Select an offer</CardDescription>
      </CardHeader>
      <Form method="get" id={form.id} onSubmit={form.onSubmit} noValidate>
        <CardContent>
          <RadioGroup
            name={fields.offerId.name}
            defaultValue={fields.offerId.initialValue}
          >
            {offers.map((offer) => (
              <Label key={offer.id}>
                <RadioGroupItem value={offer.id} id={offer.id} />
                <div className="grow flex justify-between">
                  <span>{formatDuration({ minutes: offer.duration })}</span>
                  <span>{formatPrice(offer.price)}</span>
                </div>
              </Label>
            ))}
          </RadioGroup>
          <div>{fields.offerId.errors}</div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Next
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
