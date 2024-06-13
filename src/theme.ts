'use client';
import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme {
        customColors: {
            primary_super_dark: string;
            primary_cover: string;
            grey_light: string;
            grey_black: string;
        };
    }

    interface Theme extends CustomTheme {}

    interface ThemeOptions extends CustomTheme {}
}

const inter = localFont({
    variable: '--font-inter',
    src: [
        {
            path: '../public/fonts/Inter-Bold.ttf',
            weight: '700',
        },
        {
            path: '../public/fonts/Inter-Medium.ttf',
            weight: '500',
        },
        {
            path: '../public/fonts/Inter-Regular.ttf',
            weight: '400',
        },
        {
            path: '../public/fonts/Inter-Light.ttf',
            weight: '300',
        },
        {
            path: '../public/fonts/Inter-Thin.ttf',
            weight: '200',
        },
    ],
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#B66ABF',
            contrastText: '#fff',
            main: '#851296',
            dark: '#2C003A',
        },
        secondary: {
            main: '#3BBFCD',
            contrastText: '#fff',
            light: '#75D1DE',
        },
        error: {
            main: '#C60505',
            dark: '#9D0000',
            contrastText: '#fff',
        },
        success: {
            main: '#54A300',
            contrastText: '#fff',
            light: '#96D164',
            dark: '#417C00',
        },
        warning: {
            main: '#C60505',
            contrastText: '#fff',
        },
        info: {
            main: '#75D1DE',
            contrastText: '#fff',
        },

        text: {
            primary: '#2C003A',
            secondary: '#2C003A',
        },
        background: {
            default: '#E7F6FF',
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
    customColors: {
        primary_super_dark: '#14001A',
        primary_cover: '#670C77',
        grey_light: '#D1D1D1',
        grey_black: '#8B8B8B',
    },
});

export default theme;
