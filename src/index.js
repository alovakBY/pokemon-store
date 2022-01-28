import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Router } from "./routes/Router";

import { MainLayout } from "./commonComponents/MainLayout";
import { configureStore } from "./redux/configureStore";

import index from "./redux/rootSaga";

index();

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MainLayout>
                    <Router />
                </MainLayout>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
