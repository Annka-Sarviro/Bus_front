import { IBus } from './IBus';
import { IRout } from './IRout';
import { ISeat } from './ISeat';

export interface IJourney {
    id: string;
    rout: IRout;
    bus: IBus;
    departure_date: string;
    arrival_date: string;
    is_active: boolean;
    created_at: string;
    seats: {
        first_flour_seats: [ISeat];
        second_flour_seats: [ISeat];
    };
}
