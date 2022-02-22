import * as pokemonsPageActions from "../pages/pokemons/actions";
import * as pokemonDetailsPageActions from "../pages/pokemonDetails/actions";
import * as signInPageActions from "../pages/signIn/actions";
import * as signUpPageActions from "../pages/signUp/actions";
import * as cartActions from "../pages/cart/actions";
import * as orderActions from "../pages/orders/actions";

import PokemonService from "../services/pokemonService";
import AuthService from "../services/authService";
import CartService from "../services/cartService";
import OrderService from "../services/orderService";

export const apiCallsMapping = (actionType) => {
    const actionCallMap = {
        [pokemonsPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,
        [pokemonDetailsPageActions.GET_POKEMON_DETAILS_REQUEST]:
            PokemonService.getPokemonDetails,

        [signInPageActions.SIGN_IN_REQUEST]: AuthService.signIn,
        [signUpPageActions.SIGN_UP_REQUEST]: AuthService.signUp,

        [cartActions.GET_CART_ITEMS_REQUEST]: CartService.getCartItems,
        [cartActions.SET_CART_ITEM_REQUEST]: CartService.setCartItem,
        [cartActions.UPDATE_CART_ITEM_REQUEST]: CartService.updateCartItem,
        [cartActions.DELETE_CART_ITEM_REQUEST]: CartService.deleteCartItem,

        [orderActions.GET_ORDERS_REQUEST]: OrderService.getOrders,
        [orderActions.SET_ORDER_REQUEST]: OrderService.setOrders,
    };

    return actionCallMap[actionType];
};
