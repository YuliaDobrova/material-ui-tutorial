import { createTheme } from "@mui/material/styles";

const pink = "#FFC0CB";
const lightblue = "#ADD8E6";
const purple = "#800080";
const black = "#000000";

const theme = createTheme({
  palette: {
    common: {
      pink: pink,
      lightblue: lightblue,
      purple: purple,
      black: black,
    },
    primary: {
      main: lightblue,
      mainGradient: "linear-gradient(to left, purple, pink)",
    },
    secondary: {
      main: pink,
      mainGradient: "linear-gradient(to right, lightblue, pink)",
    },
  },
  typography: {
    tab: {
      fontFamily: "Orbitron",
      textTransform: "none",
      fontSize: "2.5rem",
      color: black,
    },
    h1: {
      fontFamily: "Orbitron",
      fontSize: "2.5em",
    },
    h2: {
      fontFamily: "Orbitron",
      fontSize: "2.5em",
    },
    subtitle1: {
      fontFamily: "Orbitron",
    },
    subtitle2: {
      fontFamily: "Orbitron",
      fontSize: "1.5rem",
    },
    buttons: {
      fontFamily: "Orbitron",
      textTransform: "none",
    },
    title: {
      textDecoration: "underline",
      marginBottom: 20,
      color: "pink",
    },
    customBtn1: {
      fontSize: 60,
      backgroundColor: "pink",
      color: "pink",
      fill: "pink",
    },
    customBtn2: {
      minWidth: 10,
      marginRight: "50px",
      opacity: 1,
      "&hover": {
        color: purple,
        textDecoration: "none",
      },
    },
  },
});

export default theme;
