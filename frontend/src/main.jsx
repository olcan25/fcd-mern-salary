import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

//store
const store = configureStore();

const container = document.getElementById("root");
//ReactDOM
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
