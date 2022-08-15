import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ApiContextProvider from "./contexts/ApiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApiContextProvider>
    <App />
  </ApiContextProvider>
);

