import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    orders: [],
    isLoading: false,
    errors: null,
};

export const orderReducer = handleActions(
    {
        [actions.GET_ORDERS_REQUEST]: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        [actions.GET_ORDERS_SUCCESS]: (state, { payload }) => {
            console.log(payload);
            return {
                ...state,
                isLoading: false,
            };
        },
        [actions.GET_ORDERS_FAIL]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response.message,
            };
        },

        [actions.SET_ORDER_REQUEST]: (state, { payload }) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        [actions.SET_ORDER_SUCCESS]: (state, { payload }) => {
            console.log(payload);
            return state;
        },
        [actions.SET_ORDER_FAIL]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response.message,
            };
        },
    },
    defaultState
);
