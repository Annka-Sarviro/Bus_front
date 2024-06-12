import { useCurrency } from '@/lib/store';

export const getPrice = (price: number | undefined) => {
    const currency = useCurrency(state => state.selectCurrency);

    const course_USD = useCurrency(state => state.courseUSD);
    const course_UAH = useCurrency(state => state.courseUAH);

    if (currency === 'EUR') return price;
    if (course_USD === undefined || course_UAH === undefined) {
        return '';
    }
    if (price) {
        switch (currency) {
            case 'EUR':
                return price;
            case 'USD':
                return price * course_USD || 0;
            case 'UAH':
                return price * course_UAH || 0;

            default:
                return price;
        }
    }

    return price;
};
