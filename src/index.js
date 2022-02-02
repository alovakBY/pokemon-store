import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Router } from "./routes/Router";
import { MainLayout } from "./commonComponents/MainLayout";
import { configureStore } from "./redux/configureStore";

import "./common.css";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Router />
          </MainLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
