import { ISeat } from './ISeat';

export interface IBus {
    id: string;
    name: string;
    photo: string;
    images_list: string[];
    is_active: boolean;
    rentable: boolean;
    busIdService: string[];
    plates_number: string;
    first_floor_seats: ISeat[];
    first_floor_seats_count: number;
    second_floor_seats: ISeat[];
    second_floor_seats_count: number;
    rows_1?: number | undefined;
    rows_2?: number;
    rows_3?: number;
    wc?: boolean;
    wc_2?: boolean;
    is_wc_working: boolean;
    enter_2?: boolean;
    enter_1?: boolean;
    enter_3?: boolean;
    rows_4?: number | undefined;
    rows_5?: number | undefined;
    wc_row_1: string;
    wc_row_2: string;
}
