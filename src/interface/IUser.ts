import { ITickets } from '@/interface/ITickets';

export interface IUser {
    id?: string;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    status: 'admin' | 'worker' | 'customer' | 'user';
    email: string;
    birthday: string;
    phone?: string;
    tickets: ITickets[];
}

// export interface IProfile {
//   id?: number;
//   last_name?: string;
//   first_name?: string;
//   third_name?: string;
//   birth_date?: string;
//   date?: any;
//   email?: string;
//   delivery?: any;
//   phone?: string;
//   company?: boolean;
//   city?: string;
//   logo?: string;
//   name_company?: string;
//   physical_address_company?: string;
//   legal_address_company?: string;
//   site?: string;
//   ipn?: any;
//   phone_accountant?: any;
//   bonus?: any;
//   discount?: any;
//   user?: IUser;
// }

export interface IToken {
    token: {
        access_token: string;
        refresh_token: string;
    };
}
