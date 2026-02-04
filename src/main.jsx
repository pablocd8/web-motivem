import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Router from "./routes/router";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App>
        <Router />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);