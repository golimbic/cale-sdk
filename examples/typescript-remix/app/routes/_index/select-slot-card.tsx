import { Form, useSearchParams } from "@remix-run/react";
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
import { useForm, useInputControl } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { SlotsPayload } from "@cale-app/sdk";
import { Calendar } from "~/components/ui/calendar";
import { add } from "date-fns";

export const schema = z.object({
  offerId: z.string(),
  start: z.date({ message: "Please select a time slot" }),
  end: z.date(),
});

export default function SelectOfferCard({ data }: { data: SlotsPayload }) {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const time = useInputControl(fields.start);
  const defaultMonth = data.slots[0]?.start;
  const [searchParams, setSearchParams] = useSearchParams({
    date: defaultMonth?.toISOString(),
  });
  const selected = searchParams.get("date")
    ? new Date(searchParams.get("date")!)
    : defaultMonth;
  const onSelect = (date: Date | undefined) => {
    setSearchParams((prev) => {
      prev.set("date", date ? date.toISOString() : "");
      return prev;
    });
  };
  const endValue = time.value
    ? add(time.value, { minutes: data.duration }).toISOString()
    : "";

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>Time slots</CardTitle>
        <CardDescription>Select a time slot</CardDescription>
      </CardHeader>
      <Form method="post" id={form.id} onSubmit={form.onSubmit} noValidate>
        <input type="hidden" name="offerId" defaultValue={data.offer} />
        <input type="hidden" name="end" defaultValue={endValue} />
        <CardContent>
          <div className="flex flex-col items-center justify-center">
            <Calendar
              mode="single"
              disabled={{ before: new Date() }}
              defaultMonth={defaultMonth}
              selected={selected}
              onSelect={(d) => onSelect(d)}
            />
            {data.slots.length === 0 && (
              <div className="p-10 flex justify-center items-center text-gray-500">
                No available slots for this day
              </div>
            )}
            <RadioGroup
              name={fields.start.name}
              defaultValue={fields.start.initialValue}
              value={time.value}
              onValueChange={time.change}
              onFocus={time.focus}
              onBlur={time.blur}
            >
              {data.slots.map((slot) => (
                <Label key={slot.start.toISOString()}>
                  <RadioGroupItem
                    disabled={slot.start < new Date()}
                    value={slot.start.toISOString()}
                    id={slot.start.toISOString()}
                  />
                  {slot.start.toLocaleTimeString("en-US", {
                    timeStyle: "short",
                  })}
                </Label>
              ))}
            </RadioGroup>
            <div>{fields.start.errors}</div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" type="submit">
            Reserve{" "}
            {form.value?.start
              ? new Date(form.value?.start).toLocaleString("en-US", {
                  timeStyle: "short",
                  dateStyle: "short",
                })
              : ""}
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
