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
import { Service } from "@cale-app/sdk";

const schema = z.object({
  serviceId: z.string({ message: "Please select a service" }),
});

export default function SelectServiceCard({
  services,
}: {
  services: Pick<Service, "id" | "name">[];
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
        <CardTitle>Services</CardTitle>
        <CardDescription>Select a service</CardDescription>
      </CardHeader>
      <Form method="get" id={form.id} onSubmit={form.onSubmit} noValidate>
        <CardContent>
          <RadioGroup
            name={fields.serviceId.name}
            defaultValue={fields.serviceId.initialValue}
          >
            {services.map((service) => (
              <Label key={service.id}>
                <RadioGroupItem value={service.id} id={service.id} />
                {service.name}
              </Label>
            ))}
          </RadioGroup>
          <div>{fields.serviceId.errors}</div>
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
