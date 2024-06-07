import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Style from "./Hero.module.css";
import Banner from "@/components/common/Banner/Banner";

import { IBanner } from "@/interface/IBanner";

export const Hero = ({
  banner,
  isMain = false,
  defaultImg,
  staticData,
}: {
  banner: IBanner;
  isMain?: boolean;
  defaultImg: string;
  staticData: { title: string; description?: string };
}) => {
  return (
    <Container className={Style.content} maxWidth={false} component={"section"}>
      <Box className={Style.content__box}>
        {banner ? (
          <Banner
            img={banner.img ? banner.img : defaultImg}
            alt={banner?.name ? banner?.name : staticData.title}
            main_title={
              banner?.main_title ? banner?.main_title : staticData.title
            }
            main_desc={
              banner?.main_desc ? banner?.main_desc : staticData.description
            }
            isMain={isMain}
            defaultImg={defaultImg}
          />
        ) : (
          <Banner
            main_title={staticData.title}
            main_desc={staticData.description}
            img={defaultImg}
            alt={staticData.title}
            isMain={isMain}
            defaultImg={defaultImg}
          />
        )}
      </Box>
    </Container>
  );
};
