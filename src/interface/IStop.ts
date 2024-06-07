import { ICity } from "./ICity";

export interface IStop {
  id: string;
  city: ICity;
  departure_time: string;
  arrival_time: string;
  price: string;
  stop_number: number;
  is_stop: boolean;
}

export interface IPlace {
  id: string;
  city: ICity;
  departure_time?: string;
  arrival_time?: string;
  price?: string;
}
