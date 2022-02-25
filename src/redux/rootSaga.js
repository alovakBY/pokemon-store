import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import { watchRequest } from "../api/watchRequest";
import { loginWatcher, loadCart } from "../api/loadCartSaga";
import { setOrderWatcher } from "../api/loadOrdersSaga";

export function* rootSaga() {
    yield all([watchRequest(), loginWatcher(), loadCart(), setOrderWatcher()]);
}
