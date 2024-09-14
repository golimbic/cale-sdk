import { Reservation } from "@cale-app/sdk";
import { Form, Link } from "@remix-run/react";
import { CalendarArrowDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { formatPrice } from "~/lib/utils";

export default function ReservationConfirmed(props: {
  reservation: Reservation;
}) {
  const { reservation } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reservation confirmed</CardTitle>
        <CardDescription>
          Your reservation has been confirmed. We look forward to seeing you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          <div className="flex justify-between p-2">
            <span>Start</span>
            <span>
              {new Date(reservation.startTime).toLocaleTimeString("en-US", {
                timeStyle: "short",
              })}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span>End</span>
            <span>
              {new Date(reservation.endTime).toLocaleTimeString("en-US", {
                timeStyle: "short",
              })}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span>Total</span>
            <span>{formatPrice(reservation.totalPrice)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="secondary" asChild>
          <Link to="calendar.ics" reloadDocument download="cale.ics">
            <CalendarArrowDown className="mr-2" />
            iCal event
          </Link>
        </Button>
        <Form method="delete">
          <Button variant="ghost" type="submit">
            Cancel reservation
          </Button>
        </Form>
      </CardFooter>
    </Card>
  );
}
