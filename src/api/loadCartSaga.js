import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";
import CartService from "../services/cartService";
import { SIGN_IN_SUCCESS } from "../pages/signIn/actions";
import { SET_ORDER_SUCCESS } from "../pages/orders/actions";

import { GET_CART_ITEMS_REQUEST } from "../pages/cart/actions";

export function* loadCart() {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    if (token) {
        yield put(GET_CART_ITEMS_REQUEST());
    }
}

export function* loginWatcher() {
    yield takeEvery(SIGN_IN_SUCCESS, loadCart);
    yield takeEvery(SET_ORDER_SUCCESS, loadCart);
}
