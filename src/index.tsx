import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <Router>
      <ColorModeScript />
      <App />
    </Router>
  </>
);
