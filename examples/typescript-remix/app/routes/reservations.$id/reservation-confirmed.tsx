import { Reservation } from "@cale-app/sdk";
import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

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
        <Label>Reservation ID</Label>
        <p>{reservation.id}</p>
      </CardContent>
    </Card>
  );
}
