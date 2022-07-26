import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "monday-ui-react-core/dist/main.css";
import AppConnector from "./AppConnector";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<AppConnector />
	</Provider>
);

reportWebVitals();
