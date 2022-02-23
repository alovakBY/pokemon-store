import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import { watchRequest } from "../api/watchRequest";
import { loginWatcher, loadCart } from "../api/loadCartSaga";

export function* rootSaga() {
    yield all([watchRequest(), loginWatcher(), loadCart()]);
}
