import { IPlace, IStop } from './IStop';

export interface IRout {
    from_place: IPlace;
    id: string;
    price?: number | null;
    to_place: IPlace;
    is_popular: boolean;
    stops: IStop[];
}
