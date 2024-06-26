import { Locale } from '@/i18n.config';
import { headerStaticDataProp } from '@/interface/IStaticData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CloseIcon from '@mui/icons-material/Close';
import { Fade, ListItemIcon, Stack, useMediaQuery } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';

import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SupportSvg from '../../../../../public/icons/support.svg';

import Link from 'next/link';
import Style from './MobileNavMenu.module.css';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { IPhone } from '@/interface/IContact';

import theme from '@/theme';
import { getIcon } from '../../DashboardNavBar';
import Logout from '@mui/icons-material/Logout';
import { MdDashboard } from 'react-icons/md';

export const MobileNavMenu = ({
    staticData,
    toggleDrawer,
    handleLogout,
    user_status,
    user,
    lang,
    contacts,
}: {
    staticData: headerStaticDataProp;
    toggleDrawer: any;
    handleLogout: any;
    user: any;
    lang: Locale;
    handleOpenUserMenu: any;
    anchorElUser: any;
    handleCloseUserMenu: any;
    contacts: IPhone[];
    user_status: string | null;
}) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const md = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                height: '100vh',
                width: { xs: '100vw', md: '250px' },
                marginX: 'auto',
            }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            className={Style.nav_menu}
            justifyContent={'center'}
            py={7}
        >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(!open)}
                sx={{
                    color: 'white',
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    '&:hover': { color: theme.customColors.grey_light },
                }}
            >
                <CloseIcon />
            </IconButton>
            {md && (
                <Grid
                    display="flex"
                    container
                    item
                    lg={2}
                    xl={1}
                    sx={{
                        flexGrow: 0.3,
                        display: 'flex',
                        width: '100%',
                        color: 'white',
                        justifyContent: { xs: 'center', md: 'space-between' },
                    }}
                >
                    {user ? (
                        <Fade in={user.length > 0} appear={false}>
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: 'flex',
                                    alignItems: 'space-between',
                                    marginBottom: '24px',
                                    width: { xs: '100vw', md: '100%' },
                                    flexDirection: 'column',
                                }}
                            >
                                <Accordion
                                    disableGutters
                                    square
                                    sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        color: 'white',

                                        margin: 0,
                                        minHeight: 'initial',
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <KeyboardArrowDownIcon
                                                sx={{
                                                    fontSize: 22,
                                                    color: 'white',
                                                }}
                                                className={
                                                    anchorElUser ? Style.active : Style.arrow
                                                }
                                            />
                                        }
                                        sx={{
                                            paddingX: '32px',
                                            width: { xs: '200px', md: '100%' },
                                            marginX: 'auto',
                                            marginBottom: 2,
                                            minHeight: 'initial',
                                        }}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Avatar
                                            sx={{ width: 30, height: 30 }}
                                            alt={staticData.avatar.alt}
                                        >
                                            <FaUser />
                                        </Avatar>
                                        <Typography
                                            sx={{
                                                ml: 2,
                                                mr: 0.5,
                                                textTransform: 'none',
                                                color: '#fff',
                                                fontSize: 13,
                                                fontFamily: 'Inter',
                                                fontWeight: 300,
                                            }}
                                            className={Style.navbar__text}
                                            component={'a'}
                                            color={'white'}
                                        >
                                            {user}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            paddingX: '32px',
                                            paddingY: '16px',
                                            backgroundColor: theme.customColors.primary_super_dark,
                                            margin: 0,
                                            minHeight: 'initial',
                                        }}
                                    >
                                        {staticData.settings.map(setting => (
                                            <MenuItem
                                                key={setting.id}
                                                onClick={handleCloseUserMenu}
                                                disableGutters
                                                sx={{
                                                    justifyContent: {
                                                        xs: 'center',
                                                        md: 'flex-start',
                                                    },
                                                }}
                                            >
                                                <Link
                                                    href={`/${lang}${setting.path}`}
                                                    className={Style.List_hover}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: '40px',
                                                            color: theme.palette.background.paper,
                                                            fontSize: '18px',
                                                        }}
                                                    >
                                                        {getIcon(setting.name)}
                                                    </ListItemIcon>
                                                    <Typography
                                                        component={'span'}
                                                        textAlign="center"
                                                    >
                                                        {setting.title}
                                                    </Typography>
                                                </Link>
                                            </MenuItem>
                                        ))}
                                        {(user_status === 'admin' || user_status === 'staff') && (
                                            <MenuItem
                                                onClick={handleCloseUserMenu}
                                                disableGutters
                                                sx={{
                                                    justifyContent: {
                                                        xs: 'center',
                                                        md: 'flex-start',
                                                    },
                                                }}
                                            >
                                                <Link href={`/${lang}/dashboard/content`}>
                                                    <Typography
                                                        component={'span'}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        <ListItemIcon>
                                                            <MdDashboard
                                                                fontSize="small"
                                                                color="white"
                                                            />
                                                        </ListItemIcon>
                                                        {staticData.dashboard}
                                                    </Typography>
                                                </Link>
                                            </MenuItem>
                                        )}
                                        <MenuItem
                                            onClick={handleLogout}
                                            disableGutters
                                            className={Style.List_hover}
                                            sx={{
                                                justifyContent: { xs: 'center', md: 'flex-start' },
                                            }}
                                        >
                                            <Typography
                                                component={'span'}
                                                textAlign="center"
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                            >
                                                <ListItemIcon>
                                                    <Logout
                                                        fontSize="small"
                                                        sx={{ color: 'white' }}
                                                    />
                                                </ListItemIcon>
                                                {staticData.sign_out}
                                            </Typography>
                                        </MenuItem>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Fade>
                    ) : (
                        <Fade in appear={false}>
                            <Box mb={7} width={'100%'} px={4}>
                                <Stack
                                    direction="row"
                                    sx={{
                                        justifyContent: { xs: 'center', md: 'space-between' },
                                        gap: { xs: '16px', md: 0 },
                                    }}
                                >
                                    <Link href={`/${lang}/auth`}>
                                        <Button
                                            component={'span'}
                                            sx={{
                                                fontWeight: '400',
                                                minWidth: '45px',
                                                color: '#ffffff',
                                                textTransform: 'none',
                                                paddingRight: 0,
                                                paddingLeft: 0,
                                            }}
                                            variant={'text'}
                                        >
                                            {staticData.sign_in}
                                        </Button>
                                    </Link>
                                    <Link href={`/${lang}/auth/registration`}>
                                        <Button
                                            component={'span'}
                                            sx={{
                                                fontWeight: '400',
                                                minWidth: '106px',
                                                textTransform: 'none',
                                                bgcolor: 'primary',
                                                '&:hover': {
                                                    bgcolor: 'primary.light',
                                                },
                                            }}
                                            variant={'contained'}
                                        >
                                            {staticData.registration}
                                        </Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Fade>
                    )}
                </Grid>
            )}

            <Grid container display={'flex'} flexDirection={'column'} gap={2} px={4} mb={2}>
                {staticData.pages.map(page => (
                    <MenuItem
                        key={page.id}
                        onClick={toggleDrawer(!open)}
                        disableGutters
                        className={Style.List_hover}
                        sx={{
                            padding: 0,
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        <Link href={`/${lang}${page.path}`} passHref>
                            <Typography sx={{ color: 'white' }} textAlign="center">
                                <ListItemIcon
                                    sx={{
                                        minWidth: '40px',
                                        color: 'white',
                                        fontSize: '18px',
                                    }}
                                >
                                    {getIcon(page.name)}
                                </ListItemIcon>
                                {page.title}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Grid>

            <Grid display={'flex'} flexDirection={'column'}>
                <Accordion
                    disableGutters
                    square
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        color: 'white',

                        margin: 0,
                        minHeight: 'initial',
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <KeyboardArrowDownIcon
                                sx={{
                                    fontSize: 22,
                                    color: 'white',
                                }}
                                className={anchorElUser ? Style.active : Style.arrow}
                            />
                        }
                        className={Style.List_hover}
                        sx={{
                            paddingX: '32px',
                            width: { xs: '200px', md: '100%' },
                            marginX: 'auto',
                            marginY: 1,
                            minHeight: 'initial',
                        }}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <SupportSvg width={20} height={20} />

                        <Typography
                            sx={{
                                ml: 2,
                                mr: 0.5,
                                textTransform: 'none',
                                color: '#fff',
                            }}
                            className={Style.navbar__text}
                            component={'a'}
                            color={'white'}
                        >
                            {staticData.support}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingX: '32px',
                            // paddingY: '16px',
                            backgroundColor: theme.customColors.primary_super_dark,
                            margin: 0,
                            minHeight: 'initial',
                        }}
                    >
                        {contacts.map((tel, ind) => (
                            <MenuItem
                                key={ind}
                                onClick={handleCloseUserMenu}
                                disableGutters
                                className={Style.List_hover}
                                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                            >
                                <Link href={`tel:${tel.phone_number}`}>
                                    <Typography component={'span'} textAlign="center">
                                        {tel.phone_number}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Box>
    );
};
