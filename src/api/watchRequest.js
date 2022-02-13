import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";
import { createActionWithPostfix } from "../utils/createActionWithPostfix";
import { isApiCallAction } from "../utils/isApiCallAction";
import { apiCallsMapping } from "./apiCallsMapping";

import * as actions from "../pages/cart/actions";

function* watchRequestWorker(action) {
  try {
    const foundApiCall = apiCallsMapping(action.type);

    const response = yield call(foundApiCall, action.payload);

    yield put(
      createActionWithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data)
    );
  } catch (error) {
    yield put(createActionWithPostfix(action, REQUEST_POSTFIXES.FAIL, error));
  }
}

function* watchSignInSuccessWorker() {
  const cartItemsRequestAction = actions.GET_CART_ITEMS_REQUEST();
  try {
    const response = yield call(apiCallsMapping(cartItemsRequestAction.type));

    yield put(
      createActionWithPostfix(
        cartItemsRequestAction,
        REQUEST_POSTFIXES.SUCCESS,
        response.data
      )
    );
  } catch (error) {
    console.log(error);
    yield put(
      createActionWithPostfix(
        cartItemsRequestAction,
        REQUEST_POSTFIXES.FAIL,
        error
      )
    );
  }
}

const isApiCallActionSignIn = (action) => {
  return action.type === "SIGN_IN_SUCCESS";
};

export function* watchRequest() {
  yield takeEvery(isApiCallAction, watchRequestWorker);
  yield takeLatest(isApiCallActionSignIn, watchSignInSuccessWorker);
}
