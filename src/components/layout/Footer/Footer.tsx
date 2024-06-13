import { Divider, ListItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import Link from 'next/link';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';

import Logo from '../../../../public/logo_white.svg';
import SupportSvg from '../../../../public/icons/support.svg';

import Style from './Footer.module.css';
import { footerStaticDataProp } from '@/interface/IStaticData';
import { Locale } from '@/i18n.config';
import { IPhone } from '@/interface/IContact';
import { LocaleChange } from '@/components/common/LocaleChange';

export const Footer = async ({
    staticData,
    lang,
    contacts,
}: {
    staticData: footerStaticDataProp;
    lang: Locale;
    contacts: IPhone[];
}) => {
    return (
        <Box
            className={Style.content}
            component={'footer'}
            sx={{
                bgcolor: 'primary.dark',
            }}
        >
            <Container maxWidth={'xl'}>
                <Box className={Style.wrapper}>
                    <Box mt={4}>
                        <Grid
                            container
                            display={'flex'}
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                        >
                            <Grid lg={1} xl={1} item>
                                <Link href={`/${lang}/`}>
                                    <Logo width={90} height={90} aria-label={'logo'} />
                                </Link>
                                <LocaleChange lang={lang} flag={false} />
                            </Grid>
                            <Grid xs={4} lg={8} xl={8} item>
                                <Typography color={'white'} className={Style.title} variant={'h2'}>
                                    {staticData.nav}
                                </Typography>
                                <Box component={'nav'}>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            columnGap: 2,
                                        }}
                                    >
                                        {staticData.navigate.map(list => (
                                            <ListItem
                                                sx={{
                                                    marginTop: '8px',
                                                    display: 'inline-block',
                                                    width: 'fit-content',
                                                }}
                                                key={list.id}
                                                disablePadding
                                            >
                                                <Link href={`/${lang}${list.path}`}>
                                                    <ListItemText
                                                        className={Style.List_hover}
                                                        primaryTypographyProps={{
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            lineHeight: '15px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: '400',
                                                        }}
                                                        primary={list.title}
                                                    />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'start',
                                            columnGap: 2,
                                        }}
                                    >
                                        {staticData.official.map(list => (
                                            <ListItem
                                                key={list.id}
                                                disablePadding
                                                sx={{
                                                    width: 'fit-content',
                                                }}
                                            >
                                                <Link href={`/${lang}${list.path}`}>
                                                    <ListItemText
                                                        className={Style.List_hover}
                                                        primaryTypographyProps={{
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            lineHeight: '15px',
                                                            fontWeight: '400',
                                                        }}
                                                        primary={list.title}
                                                    />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Grid>

                            <Grid lg={2} xl={2} item>
                                <Typography color={'white'} className={Style.title} variant={'h2'}>
                                    <Stack spacing={1} direction={'row'} alignItems={'center'}>
                                        <SupportSvg width={21} height={20} />
                                        <span>{staticData.support}</span>
                                    </Stack>
                                </Typography>
                                <Box>
                                    <List>
                                        {contacts &&
                                            contacts.map((el, ind) => (
                                                <ListItem
                                                    disablePadding
                                                    className={Style.List_hover}
                                                    key={ind}
                                                    sx={{ fontSize: '16px', color: 'white' }}
                                                >
                                                    <Link
                                                        href={`tel: ${el.phone_number}`}
                                                        className={Style.phone_number}
                                                    >
                                                        {el.phone_number}
                                                    </Link>
                                                    {el.telegram && (
                                                        <Link
                                                            href={`https://t.me/+38${el.telegram}`}
                                                            target="_blank"
                                                            rel="noreferrer nofollow"
                                                            className={Style.List_hover}
                                                        >
                                                            <IconButton sx={{ color: 'white' }}>
                                                                <TbBrandTelegram
                                                                    color={'inherit'}
                                                                    size={24}
                                                                />
                                                            </IconButton>
                                                        </Link>
                                                    )}
                                                    {el.viber && (
                                                        <Link
                                                            href={`viber://chat?number=+38${el.viber}`}
                                                            target="_blank"
                                                            rel="noreferrer nofollow"
                                                            className={Style.List_hover}
                                                        >
                                                            <IconButton
                                                                // className={Style.List_hover}
                                                                sx={{ color: 'white' }}
                                                            >
                                                                <FaViber
                                                                    color={'inherit'}
                                                                    size={24}
                                                                />
                                                            </IconButton>
                                                        </Link>
                                                    )}
                                                    {el.whats_up && (
                                                        <Link
                                                            href={`https://wa.me/+3${el.whats_up.replace(/\s/g, '')}`}
                                                            target="_blank"
                                                            rel="noreferrer nofollow"
                                                            className={Style.List_hover}
                                                        >
                                                            <IconButton sx={{ color: 'white' }}>
                                                                <FaWhatsapp
                                                                    color={'inherit'}
                                                                    size={24}
                                                                />
                                                            </IconButton>
                                                        </Link>
                                                    )}
                                                </ListItem>
                                            ))}
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box>
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                <List
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        columnGap: 2,
                                    }}
                                >
                                    {staticData.official.map(list => (
                                        <ListItem
                                            key={list.id}
                                            disablePadding
                                            sx={{
                                                width: 'fit-content',
                                            }}
                                        >
                                            <Link href={`/${lang}${list.path}`}>
                                                <ListItemText
                                                    className={Style.List_hover}
                                                    primaryTypographyProps={{
                                                        color: '#fff',
                                                        fontSize: '14px',
                                                        lineHeight: '15px',
                                                        fontWeight: '400',
                                                    }}
                                                    primary={list.title}
                                                />
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                            <Divider light sx={{ borderColor: 'primary.light', opacity: 0.4 }} />
                            <Box className={Style.copyright_content}>
                                <Typography color={'white'} className={Style.copyright_text}>
                                    {staticData.copyright}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
