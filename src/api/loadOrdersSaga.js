import { put, takeEvery } from "redux-saga/effects";

import { SET_ORDER_SUCCESS, GET_ORDERS_REQUEST } from "../pages/orders/actions";

function* updateOrderWorker() {
    yield put(GET_ORDERS_REQUEST());
}

export function* setOrderWatcher() {
    yield takeEvery(SET_ORDER_SUCCESS, updateOrderWorker);
}
