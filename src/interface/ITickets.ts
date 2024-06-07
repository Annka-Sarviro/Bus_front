import { IJourney } from "./IJourney";
import { IUser } from "./IUser";

export interface ITickets {
  id: string;
  seat_number: number;
  status: "new" | "blocked" | "reserve" | "ordered";
  comment: string;
  order_id: number;
  price: number;
  additional_baggage: string;
  journey: IJourney;
  user: IUser;
  ordered_data: string;
  passenger_type: "adult" | "child";
}
