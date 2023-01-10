import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeStoreProvider } from "./stores/themeStore";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeStoreProvider>
      <App />
    </ThemeStoreProvider>
  </React.StrictMode>
);
