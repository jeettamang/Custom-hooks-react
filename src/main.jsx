import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AccountContextProvider } from "./context/AccountContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccountContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AccountContextProvider>
  </StrictMode>
);
