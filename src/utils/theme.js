import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      background: {
                          default: "#121212",
                          paper: "#1D1D1D",
                      },
                      text: {
                          primary: "#ffffff",
                      },
                  }
                : {
                      background: {
                          default: "#ffffff",
                          paper: "#f4f4f4",
                      },
                      text: {
                          default: "#000000",
                          primary: "#000000",
                      },
                  }),
        },
    });