import { ThemeProvider, CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter basename={import.meta.env.BASE_URL || "/Portfolio/"}>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
);
