import { call, put, takeEvery } from "redux-saga/effects";
import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";
import { createActionWithPostfix } from "../utils/createActionWithPostfix";
import { isApiCallAction } from "../utils/isApiCallAction";
import { apiCallsMapping } from "./apiCallsMapping";

function* watchRequestWorker(action) {
    try {
        const foundApiCall = apiCallsMapping(action);

        const response = yield call(foundApiCall, action.payload);

        yield put(
            createActionWithPostfix(
                action,
                REQUEST_POSTFIXES.SUCCES,
                response.data
            )
        );
    } catch (error) {
        yield put(
            createActionWithPostfix(action, REQUEST_POSTFIXES.FAIL, error)
        );
    }
}

export function* watchRequest() {
    yield takeEvery(isApiCallAction, watchRequestWorker);
}
