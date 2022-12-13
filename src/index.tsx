import "./index.css";
import { App } from "./App";
import * as React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store}>
		<Router>
			<ColorModeScript />
			<App />
		</Router>
	</Provider>
);
