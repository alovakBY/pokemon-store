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
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: "#212121",
                    "&.Mui-selected": {
                        color: "white",
                        backgroundColor: "#212121",
                    },
                    "&:hover.Mui-selected": {
                        backgroundColor: "rgba(33,33,33, 0.5)",
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.MuiPaginationItem-root:hover": {
                        backgroundColor: "#e43332",
                        color: "white",
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    paddingTop: "0px",
                    paddingBottom: "0px",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    overflowY: "hidden !important",
                    color: "#212121",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {},
            },
        },
    },
});
