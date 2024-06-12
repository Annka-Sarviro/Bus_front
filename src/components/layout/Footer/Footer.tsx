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
import { FaViber } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';

import Logo from '../../../../public/logo_white.svg';
import Style from './Footer.module.css';
import { footerStaticDataProp } from '@/interface/IStaticData';
import { Locale } from '@/i18n.config';
import { IPhone } from '@/interface/IContact';

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
        <Box className={Style.content} component={'footer'}>
            <Container maxWidth={'xl'}>
                <Box className={Style.wrapper}>
                    <Box mt={4}>
                        <Grid
                            container
                            display={'flex'}
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                        >
                            <Grid lg={2} xl={2} item>
                                <Link href={`/${lang}/`}>
                                    <Logo width={90} height={90} aria-label={'logo'} />
                                </Link>
                            </Grid>
                            <Grid lg={2} xl={2} item>
                                <Typography color={'white'} className={Style.title} variant={'h2'}>
                                    {staticData.nav}
                                </Typography>
                                <Box component={'nav'}>
                                    <List>
                                        {staticData.navigate.map(list => (
                                            <ListItem
                                                sx={{ marginTop: '8px' }}
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
                            </Grid>
                            <Grid lg={2} xl={2} item>
                                <Typography color={'white'} className={Style.title} variant={'h2'}>
                                    {staticData.cooperation}
                                </Typography>
                                <List>
                                    {staticData.official.map(list => (
                                        <ListItem
                                            sx={{ marginTop: '8px' }}
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
                            </Grid>
                            <Grid lg={2} xl={2} item>
                                <Typography color={'white'} className={Style.title} variant={'h2'}>
                                    <Stack spacing={1} direction={'row'} alignItems={'center'}>
                                        <BiSupport size={28} color={'#FABA17'} />
                                        <span>{staticData.support}</span>
                                    </Stack>
                                </Typography>
                                <Box>
                                    <List>
                                        {contacts.map((list, ind) => (
                                            <ListItem
                                                sx={{ marginTop: '8px' }}
                                                key={ind}
                                                disablePadding
                                            >
                                                <Link href={`tel:${list.phone_number}`}>
                                                    <ListItemText
                                                        className={Style.List_hover}
                                                        primaryTypographyProps={{
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            lineHeight: '15px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: '400',
                                                        }}
                                                        primary={list.phone_number}
                                                    />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Stack spacing={1} direction={'row'}>
                                        {contacts && contacts[0]?.telegram && (
                                            <Link
                                                href={`https://t.me/+38${contacts[0].telegram.replace(/\s/g, '')}`}
                                                target="_blank"
                                                rel="noreferrer nofollow"
                                            >
                                                <IconButton className={Style.List_hover}>
                                                    <TbBrandTelegram color={'white'} />
                                                </IconButton>
                                            </Link>
                                        )}

                                        {contacts[0]?.whats_up && (
                                            <Link
                                                href={`https://wa.me/+3${contacts[0].whats_up.replace(/\s/g, '')}`}
                                                target="_blank"
                                                rel="noreferrer nofollow"
                                            >
                                                <IconButton className={Style.List_hover}>
                                                    <BsFacebook color={'white'} />
                                                </IconButton>
                                            </Link>
                                        )}

                                        {contacts[0]?.viber && (
                                            <Link
                                                href={`viber://chat?number=+38${contacts[0].viber.replace(/\s/g, '')}`}
                                                target="_blank"
                                                rel="noreferrer nofollow"
                                            >
                                                <IconButton className={Style.List_hover}>
                                                    <FaViber color={'white'} />
                                                </IconButton>
                                            </Link>
                                        )}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box>
                            <Divider color={'#0B356A'} />
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
