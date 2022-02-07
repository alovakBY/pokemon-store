import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        dark: {
            main: "#212121",
        },
        secondary: {
            main: "#fff",
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
    },
});
