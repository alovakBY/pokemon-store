import { createAction } from "redux-actions";

export const SET_ORDER_REQUEST = createAction("SET_ORDER_REQUEST");
export const SET_ORDER_SUCCESS = createAction("SET_ORDER_SUCCESS");
export const SET_ORDER_FAIL = createAction("SET_ORDER_FAIL");

export const GET_ORDERS_REQUEST = createAction("GET_ORDERS_REQUEST");
export const GET_ORDERS_SUCCESS = createAction("GET_ORDERS_SUCCESS");
export const GET_ORDERS_FAIL = createAction("GET_ORDERS_FAIL");
