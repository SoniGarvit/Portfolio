import { createTheme } from "@mui/material/styles";

import type { Shadows } from "@mui/material/styles";

const shadows = [
  "none",
  "0 2px 6px rgba(0,0,0,0.06)",
  "0 4px 12px rgba(0,0,0,0.08)",
  "0 8px 20px rgba(0,0,0,0.10)",
  ...Array(21).fill("none"),
] as Shadows;

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1e40af",
    },
    secondary: {
      main: "#10b981",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },

  typography: {
    fontFamily: `"Outfit", "Roboto", sans-serif`,

    h1: {
      fontFamily: `"Sora", sans-serif`,
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: `"Sora", sans-serif`,
      fontSize: "2.25rem",
      fontWeight: 600,
    },
    h3: {
      fontFamily: `"Sora", sans-serif`,
      fontSize: "1.875rem",
      fontWeight: 600,
    },
    h4: {
      fontFamily: `"Sora", sans-serif`,
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    body1: {
      fontFamily: `"Outfit", sans-serif`,
      fontSize: "1.05rem",
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: `"Outfit", sans-serif`,
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },

    button: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 14,
  },

  shadows,
});

export default theme;
