import { Reservation } from "@cale-app/sdk";
import { Label } from "@radix-ui/react-label";
import { Form, Link, useSubmit } from "@remix-run/react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { ConfettiButton } from "~/components/magicui/confetti";
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

export default function ReservationHold(data: {
  reservation: Reservation;
  releasedAt: string;
}) {
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
  }, [data.releasedAt]);

  const submit = useSubmit();

  useEffect(() => {
    if (expired) {
      submit(
        { intent: "cancel", id: data.reservation.id },
        { method: "delete", encType: "application/json" }
      );
    }
  }, [expired, submit, data.reservation.id]);

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
            <Input placeholder="Name" name="name" id="name" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Email" name="email" id="email" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="phone">Phone</Label>
            <Input placeholder="Phone" name="phone" id="phone" />
          </div>
          <ConfettiButton type="submit" className="w-full mt-4">
            Confirm Reservation
          </ConfettiButton>
        </Form>
      </CardContent>
    </Card>
  );
}
