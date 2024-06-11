import { Locale } from '@/i18n.config';
import { getMainDictionaries } from '@/lib/dictionary';
import axios from 'axios';
import { IGetBanner } from '@/interface/IBanner';
import { Hero } from '@/components/published/Hero';
import { Wrapper } from '@/components/common/Wrapper';
import { MainSection } from '@/components/published/Main/MainSection';
import { Metadata } from 'next';

const getMainPage = async (lang: Locale) => {
  try {
    const response = await axios.get<IGetBanner>(
      `${process.env.NEXT_PUBLIC_BACK_URL}/pages/main_page`
    );

    if (response.status === 200) {
      return {
        id: response.data?.page?._id,
        name: response.data?.page?.name,
        h1: response.data?.page?.main_title,
        alt: response.data?.page?.name,
        img: response.data?.page?.img,
        description: response.data?.page?.main_desc,
      };
    } else return {};
  } catch (error) {
    return {};
  }
};

export default async function Home({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  const lang = params.lang;
  const banner = await getMainPage(lang);
  const staticData = await getMainDictionaries(lang);
  const defaultImg = '/images/main_bg_default.jpg';

  return (
    <>
      <Hero banner={banner} isMain={true} defaultImg={defaultImg} staticData={staticData} />
      <Wrapper>
        <MainSection staticData={staticData} lang={lang} />
      </Wrapper>
    </>
  );
}
