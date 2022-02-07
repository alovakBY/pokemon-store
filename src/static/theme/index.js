import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    dark: {
      main: "#212121",
    },
    secondary: {
      main: "#e43332",
    },
  },
  typography: {
    fontFamily: "OpenSans",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1440px !important",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#212121",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#212121",
          "&.Mui-checked": {
            color: "#e43332",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#212121",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#e43332",
          },
        },
      },
    },
  },
});