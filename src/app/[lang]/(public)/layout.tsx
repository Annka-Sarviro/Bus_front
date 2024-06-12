import { Locale } from '@/i18n.config';
import axios from 'axios';

import {
    getFooterDictionaries,
    getHeaderDictionaries,
    getInfobuyDictionaries,
    getPopularDictionaries,
} from '@/lib/dictionary';
import { NavBar } from '@/components/layout/NavBar';
import { InfoBuy } from '@/components/layout/InfoBuy';
import { Popular } from '@/components/layout/Popular';
import { Footer } from '@/components/layout/Footer';

import { getUserStatus, getUserInfo } from '@/lib/auth';

const getPopularRouts = async (lang: Locale) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACk_URL}/rout/popular`);

        if (response.status === 200) {
            return response.data.data.result;
        } else return [];
    } catch (error) {
        return [];
    }
};

const getContact = async (lang: Locale) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/contact/socials/`);

        if (response.status === 200) {
            return response.data.data.result;
        } else return [];
    } catch (error) {
        return [];
    }
};

export default async function PublicLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    const lang = params.lang;
    const header = await getHeaderDictionaries(lang);
    const footer = await getFooterDictionaries(lang);
    const infobuy = await getInfobuyDictionaries(lang);
    const popular = await getPopularDictionaries(lang);

    const popularRouts = await getPopularRouts(lang);
    const contacts = await getContact(lang);
    const user = await getUserInfo();
    const user_status = await getUserStatus();

    return (
        <>
            <NavBar
                staticData={header}
                lang={lang}
                contacts={contacts[0].contacts}
                user_email={user?.email}
                user_status={user_status}
            />

            <main>
                {children}
                <InfoBuy staticData={infobuy} lang={lang} />
                {popularRouts && <Popular staticData={popular} popularRouts={popularRouts} />}
            </main>

            <Footer staticData={footer} lang={lang} contacts={contacts[0].contacts} />
        </>
    );
}
