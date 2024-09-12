import { Reservation } from "@cale-app/sdk";
import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
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
    </Card>
  );
}
