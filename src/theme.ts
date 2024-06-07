"use client";
import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";

const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Inter-Thin.ttf",
      weight: "200",
    },
  ],
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#851296",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3BBFCD",
      contrastText: "#fff",
    },
    error: {
      main: "#C60505",
      contrastText: "#fff",
    },
    success: {
      main: "#54A300",
      contrastText: "#fff",
    },
    warning: {
      main: "#C60505",
      contrastText: "#fff",
    },
    info: {
      main: "#grey_black",
      contrastText: "#fff",
    },

    text: {
      primary: "#2C003A",
      secondary: "#2C003A",
    },
    background: {
      default: "#E7F6FF",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
