import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    cartInfo: null,
    isLoading: false,
    errors: null,
    clickedPokemonId: null,
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
            return {
                ...state,
                isLoading: true,
                errors: null,
                clickedPokemonId: payload.id,
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

        [actions.UPDATE_CART_ITEM_REQUEST]: (state, { payload }) => {
            return {
                ...state,
                isLoading: true,
                errors: null,
                clickedPokemonId: payload.id,
            };
        },
        [actions.UPDATE_CART_ITEM_SUCCESS]: (state, { payload }) => {
            const cartInfoCopy = { ...state.cartInfo };
            const updatedItemIndex = cartInfoCopy.itemsList.findIndex(
                (pokemon) => {
                    return pokemon.id === payload.response.updatedItem.id;
                }
            );
            cartInfoCopy.itemsList.splice(
                updatedItemIndex,
                1,
                payload.response.updatedItem
            );
            return {
                ...state,
                cartInfo: {
                    ...cartInfoCopy,
                    quantity: payload.response.cartState.quantity,
                    totalPrice: payload.response.cartState.totalPrice,
                },
                isLoading: false,
            };
        },
        [actions.UPDATE_CART_ITEM_FAIL]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response.message,
            };
        },

        [actions.DELETE_CART_ITEM_REQUEST]: (state, { payload }) => {
            return {
                ...state,
                isLoading: true,
                clickedPokemonId: payload,
            };
        },
        [actions.DELETE_CART_ITEM_SUCCESS]: (state, { payload }) => {
            const cartInfoCopy = { ...state.cartInfo };
            const updatedItemIndex = cartInfoCopy.itemsList.findIndex(
                (pokemon) => {
                    return pokemon.id === payload.response.removedItemId;
                }
            );
            cartInfoCopy.itemsList.splice(updatedItemIndex, 1);
            return {
                ...state,
                cartInfo: {
                    ...cartInfoCopy,
                    quantity: payload.response.cartState.quantity,
                    totalPrice: payload.response.cartState.totalPrice,
                },
                isLoading: false,
            };
        },
        [actions.DELETE_CART_ITEM_FAIL]: (state, { payload }) => {
            console.log(payload);
            return state;
        },
    },
    defaultState
);
