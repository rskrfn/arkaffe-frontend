import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import storeWithPersistor from "./redux/Store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeWithPersistor.store}>
      <BrowserRouter>
        <PersistGate persistor={storeWithPersistor.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
