"use client";
import { createTheme, ThemeProvider as TP } from "@mui/material/styles";
// import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(216 180 254)",
      dark: "#c084fc",
      contrastText: "#c084fc",
    },
    secondary: {
      main: "rgb(216 180 254)",
    },
    info: {
      main: "#c084fc",
      dark: "#c084fc",
      light: "#c084fc",
    },
    background: {
      default: "#000",
    },
  },
});

interface ThemeProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProps) {
  return <TP theme={theme}>{children}</TP>;
}
