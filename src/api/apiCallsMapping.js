import * as pokemonsPageActions from "../pages/pokemons/actions";
import * as pokemonDetailsPageActions from "../pages/pokemonDetails/actions";
import * as signInPageActions from "../pages/signIn/actions";
import * as signUpPageActions from "../pages/signUp/actions";

import PokemonService from "../services/pokemonService";
import authService from "../services/authService";

export const apiCallsMapping = (action) => {
  const actionCallMap = {
    [pokemonsPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,
    [pokemonDetailsPageActions.GET_POKEMON_DETAILS_REQUEST]:
      PokemonService.getPokemonDetails,
    [signInPageActions.SIGN_IN_REQUEST]: authService.signIn,
    [signUpPageActions.SIGN_UP_REQUEST]: authService.signUp,
  };

  return actionCallMap[action.type];
};
