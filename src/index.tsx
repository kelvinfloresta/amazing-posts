import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Routes from "routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
