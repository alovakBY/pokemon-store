import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

import { Router } from "./routes/Router";
import { MainLayout } from "./commonComponents/MainLayout";
import { configureStore } from "./redux/configureStore";
import { theme } from "./static/theme";

import "./styles/fonts.css";
import "./styles/common.css";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Container>
              <MainLayout>
                <Router />
              </MainLayout>
            </Container>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
