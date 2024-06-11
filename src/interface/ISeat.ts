export interface ISeat {
    id: string;
    seat_number: number;
    tickets_id?: string;
    status: 'new' | 'blocked' | 'reserve' | 'ordered' | 'selected' | 'empty';
}
