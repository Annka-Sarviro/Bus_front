import * as React from 'react';
import axios from 'axios';
import { Locale } from '@/i18n.config';

import { SearchRoutForm } from '@/components/published/Main/SearchRoutForm';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Style from './page.module.css';

import { MainStaticDataProps } from '@/interface/IStaticData';
import { IRout } from '@/interface/IRout';
import { IJourney } from '@/interface/IJourney';

const getPopularRouts = async (lang: Locale): Promise<IRout[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/rout/popular`);

        if (response.status === 200) {
            return response.data.data.result;
        } else return [];
    } catch (error) {
        return [];
    }
};

const getRoute = async (lang: Locale): Promise<IRout[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/rout`);

        if (response.status === 200) {
            return response.data.data.result;
        } else return [];
    } catch (error) {
        return [];
    }
};

const getJourney = async (lang: Locale): Promise<IJourney[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/journey?perPage=5`);

        if (response.status === 200) {
            return response.data.data.result;
        } else return [];
    } catch (error) {
        return [];
    }
};

export const MainSection = async ({
    staticData,
    lang,
}: {
    staticData: MainStaticDataProps;
    lang: Locale;
}) => {
    const routs = await getRoute(lang);
    const popularRouts = await getPopularRouts(lang);
    const journey = await getJourney(lang);
    const routsFrom = [...new Set(routs.map(item => item?.from_place.city.title))];
    const routsTo = [...new Set(routs.map(item => item?.to_place?.city.title))];
    const popularRoutsFrom = [
        ...new Set(popularRouts.map(item => item?.from_place.city.title)),
    ].slice(0, 4);
    const popularRoutsTo = [...new Set(popularRouts.map(item => item?.to_place?.city.title))].slice(
        0,
        4
    );

    return (
        <Container maxWidth={false} className={Style.main} disableGutters>
            <Box mb={2}>
                <Typography
                    color={'primary'}
                    variant={'h2'}
                    fontWeight={'700'}
                    sx={{
                        fontSize: { xs: '19px', md: '24px', xl: '32px' },
                        color: 'primary.dark',
                    }}
                >
                    {staticData.search_title}
                </Typography>
            </Box>
            <SearchRoutForm
                staticData={staticData}
                lang={lang}
                popularRoutsFrom={popularRoutsFrom}
                popularRoutsTo={popularRoutsTo}
                routsFrom={routsFrom}
                routsTo={routsTo}
                journey={journey}
            />
        </Container>
    );
};
