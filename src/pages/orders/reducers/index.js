import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    orders: [],
    isLoading: false,
    errors: null,
};

export const orderReducer = handleActions(
    {
        [combineActions(actions.GET_ORDERS_REQUEST, actions.SET_ORDER_REQUEST)]:
            (state) => {
                return {
                    ...state,
                    isLoading: true,
                };
            },
        [combineActions(actions.GET_ORDERS_FAIL, actions.SET_ORDER_FAIL)]: (
            state,
            { payload }
        ) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response.message,
            };
        },
        [actions.GET_ORDERS_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                orders: payload.response,
            };
        },
        [actions.SET_ORDER_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
            };
        },
    },
    defaultState
);
