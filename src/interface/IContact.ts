export interface IPhone {
  phone_number: string;
  telegram: string;
  viber: string;
  whats_up: string;
}

export interface IContact {
  address: string;
  email: string;
  weekdays_work: string;
  weekdays_time: string;
  weekends: string;
  lunch_time: string;
  contacts: IPhone[];
}
