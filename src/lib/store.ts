import { currency } from '@/helpers/getCurrency';
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface PopularState {
    selectRoutsTo: string;
    selectRoutsFrom: string;
    setSelectRoutsTo: (to: string) => void;
    setSelectRoutsFrom: (from: string) => void;
}

export interface CurrencyState {
    selectCurrency: string;
    setCurrency: (el: string) => void;
    courseUSD?: number;
    courseUAH?: number;
    fetchCourseUSD: () => Promise<void>;
    fetchCourseUAH: () => Promise<void>;
}
const usePopular = create<PopularState>(set => ({
    selectRoutsTo: '',
    selectRoutsFrom: '',
    setSelectRoutsTo: (to: string) => set(state => ({ ...state, selectRoutsTo: to })),
    setSelectRoutsFrom: (from: string) => set(state => ({ ...state, selectRoutsFrom: from })),
}));

const useCurrency = create<CurrencyState>(set => ({
    selectCurrency: 'EUR',
    setCurrency: (el: string) => set(state => ({ ...state, selectCurrency: el })),

    fetchCourseUSD: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACK_URL}/variable?variable_name=rate_euro_to_usd`
            );

            const data = response.data.data.rate_euro_to_usd; // Corrected the rate key

            set(state => ({
                ...state,
                courseUSD: data,
            }));
        } catch (error) {
            console.error('Failed to fetch currency rate:', error);
        }
    },

    fetchCourseUAH: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACK_URL}/variable?variable_name=rate_euro_to_uah`
            );
            const data = response.data.data.rate_euro_to_uah;

            set(state => ({
                ...state,
                courseUAH: data,
            }));
        } catch (error) {
            console.error('Failed to fetch currency rate:', error);
        }
    },
}));

export { usePopular, useCurrency };
