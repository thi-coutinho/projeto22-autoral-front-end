"use client";
import { createTheme, ThemeProvider as TP } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3463e5",
      light: "#f7e8c0",
    },
    secondary: {
      main: "#f43474",
    },
    text: {
      primary: "#fafaf5",
    },
    background: {
      default: "#111108",
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        sizeSmall: {
          minHeight: "16px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundImage:
            "radial-gradient(farthest-corner circle at top right,#00dfff -68% -68%, #8c00ea 100%)!important",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          color: "white",
          fontWeight: 400,
          height: 48,
          padding: "0 30px",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Josefin Sans", "Helvetica", "Arial", sans-serif',
    h2: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
    h1: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Yeseva One", "Helvetica", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

interface ThemeProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProps) {
  return <TP theme={themeOptions}>{children}</TP>;
}
