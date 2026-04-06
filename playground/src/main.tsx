import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@uniui/core/styles.css";

import { App } from "./app";
import "./app.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("UniUI playground root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

