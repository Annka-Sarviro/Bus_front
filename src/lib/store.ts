import { currency } from '@/helpers/getCurrency';
import axios from 'axios';
import { create } from 'zustand';

export interface PopularState {
    selectRoutsTo: string;
    selectRoutsFrom: string;
    setSelectRoutsTo: (to: string) => void;
    setSelectRoutsFrom: (from: string) => void;
}

export interface CurrencyState {
    currency: string;
    setCurrency: (el: string) => void;
    course_USD: () => Promise<void>;
    course_UAH: () => Promise<void>;
}
const usePopular = create<PopularState>(set => ({
    selectRoutsTo: '',
    selectRoutsFrom: '',
    setSelectRoutsTo: (to: string) => set(state => ({ ...state, selectRoutsTo: to })),
    setSelectRoutsFrom: (from: string) => set(state => ({ ...state, selectRoutsFrom: from })),
}));

const useCurrency = create<CurrencyState>(set => ({
    currency: 'EUR',
    setCurrency: (el: string) => set(state => ({ ...state, currency: el })),

    course_USD: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACK_URL}/variable/rate_euro_to_uah`
            );
            const data = response.data.data.rate_euro_to_uah;

            set(state => ({
                ...state,
                courseUSD: data,
            }));
        } catch (error) {
            console.error('Failed to fetch currency rate:', error);
        }
    },
    course_UAH: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACK_URL}/variable/rate_euro_to_usd`
            );
            const data = response.data.data.rate_euro_to_uah;

            set(state => ({
                ...state,
                course_UAH: data,
            }));
        } catch (error) {
            console.error('Failed to fetch currency rate:', error);
        }
    },
}));

export { usePopular, useCurrency };
