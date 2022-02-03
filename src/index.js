import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Router } from "./routes/Router";
import { MainLayout } from "./commonComponents/MainLayout";
import { configureStore } from "./redux/configureStore";

<<<<<<< HEAD
import "./index.css";
=======
import "./common.css";
>>>>>>> 4d84d924bd205fe4d557bac4c1026e00547c747d

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
