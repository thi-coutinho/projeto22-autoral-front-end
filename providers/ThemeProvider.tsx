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
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       WebkitBoxShadow: "none",
    //       WebkitAnimationFillMode: "none",
    //     },
    //   },
    // },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + $track": {
              opacity: 1,
              border: "none",
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: "1px solid #bdbdbd",
          backgroundColor: "#fafafa",
          opacity: 1,
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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
