import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  cartInfo: null,
  isLoading: false,
  errors: null,
};

export const cartReducer = handleActions(
  {
    [actions.GET_CART_ITEMS_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    },
    [actions.GET_CART_ITEMS_SUCCESS]: (state, { payload }) => {
      // console.log(payload.response);
      return {
        ...state,
        cartInfo: payload.response,
        isLoading: false,
      };
    },
    [actions.GET_CART_ITEMS_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response.message,
      };
    },

    [actions.SET_CART_ITEM_REQUEST]: (state, { payload }) => {
      // console.log(payload);
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    },
    [actions.SET_CART_ITEM_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        cartInfo: payload.response,
        isLoading: false,
      };
    },
    [actions.SET_CART_ITEM_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response.message,
      };
    },
  },
  defaultState
);
