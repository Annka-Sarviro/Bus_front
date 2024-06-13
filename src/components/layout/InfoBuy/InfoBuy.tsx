import { Card, CardContent, CardMedia, Fade, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import cn from 'clsx';

import React from 'react';

import info_buy_1 from '../../../../public/images/info_buy_1.png';
import info_buy_2 from '../../../../public/images/info_buy_2.png';
import info_buy_3 from '../../../../public/images/info_buy_3.png';

import Style from './InfoBuy.module.css';

import { infoBuyStaticDataProp } from '@/interface/IStaticData';
import { Locale } from '@/i18n.config';
import Image from 'next/image';

export function InfoBuy({ staticData, lang }: { staticData: infoBuyStaticDataProp; lang: Locale }) {
    return (
        <Box component={'section'}>
            <Container maxWidth="xl">
                <Fade in={true} timeout={1000}>
                    <Grid mt={6} container>
                        <Grid item>
                            <Box>
                                <Typography fontSize={32} fontWeight={700} variant={'h2'}>
                                    {staticData.title}
                                </Typography>
                            </Box>
                            <Grid
                                mt={4}
                                container
                                flexDirection={'row'}
                                spacing={2}
                                justifyContent={'space-between'}
                            >
                                <Grid item sm={12} md={4} lg={4} xl={4}>
                                    <Card className={Style.card} sx={{ bgcolor: 'primary.light' }}>
                                        <Stack
                                            className={cn(Style.r, Style.c, Style.lg__title)}
                                            spacing={1}
                                        >
                                            <CardContent sx={{ padding: '0' }}>
                                                <Typography
                                                    color={'white'}
                                                    variant={'body2'}
                                                    component={'span'}
                                                    alignSelf={'center'}
                                                >
                                                    {staticData.card_search}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia>
                                                <Image
                                                    src={info_buy_1}
                                                    alt=""
                                                    width={90}
                                                    height={90}
                                                />
                                            </CardMedia>
                                        </Stack>
                                    </Card>
                                </Grid>
                                <Grid item sm={12} md={4} lg={4} xl={4}>
                                    <Card
                                        className={Style.card}
                                        sx={{
                                            bgcolor: 'primary.light',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Stack
                                            className={cn(Style.r, Style.c, Style.lg__title)}
                                            spacing={1}
                                        >
                                            <CardContent sx={{ padding: '0' }}>
                                                <Typography
                                                    color={'white'}
                                                    variant={'body2'}
                                                    component={'span'}
                                                >
                                                    {staticData.card_data}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia>
                                                <Image
                                                    src={info_buy_2}
                                                    alt=""
                                                    width={90}
                                                    height={90}
                                                />
                                            </CardMedia>
                                        </Stack>
                                    </Card>
                                </Grid>
                                <Grid item sm={12} md={4} lg={4} xl={4}>
                                    <Card className={Style.card} sx={{ bgcolor: 'primary.light' }}>
                                        <Stack
                                            className={cn(Style.r, Style.c, Style.lg__title)}
                                            spacing={1}
                                        >
                                            <CardContent sx={{ padding: '0' }}>
                                                <Typography
                                                    alignSelf={'center'}
                                                    color={'white'}
                                                    variant={'body2'}
                                                    component={'span'}
                                                >
                                                    {staticData.card_mobile}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia>
                                                <Image
                                                    src={info_buy_3}
                                                    alt=""
                                                    width={90}
                                                    height={90}
                                                />
                                            </CardMedia>
                                        </Stack>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    );
}
