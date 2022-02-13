import * as pokemonsPageActions from "../pages/pokemons/actions";
import * as pokemonDetailsPageActions from "../pages/pokemonDetails/actions";
import * as signInPageActions from "../pages/signIn/actions";
import * as signUpPageActions from "../pages/signUp/actions";
import * as cartActions from "../pages/cart/actions";

import pokemonService from "../services/pokemonService";
import authService from "../services/authService";
import cartService from "../services/cartService";

export const apiCallsMapping = (actionType) => {
  const actionCallMap = {
    [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonService.getPokemons,
    [pokemonDetailsPageActions.GET_POKEMON_DETAILS_REQUEST]:
      pokemonService.getPokemonDetails,

    [signInPageActions.SIGN_IN_REQUEST]: authService.signIn,
    [signUpPageActions.SIGN_UP_REQUEST]: authService.signUp,

    [cartActions.GET_CART_ITEMS_REQUEST]: cartService.getCartItems,
    [cartActions.SET_CART_ITEM_REQUEST]: cartService.setCartItem,
    [cartActions.UPDATE_CART_ITEM_REQUEST]: cartService.updateCartItem,
    [cartActions.DELETE_CART_ITEM_REQUEST]: cartService.deleteCartItem,
  };

  return actionCallMap[actionType];
};
