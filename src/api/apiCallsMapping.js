import * as pokemonsPageActions from "../pages/pokemons/actions";
import * as pokemonDetailsPageActions from "../pages/pokemonDetails/actions";
import * as loginPageActions from "../pages/login/actions";

import PokemonService from "../services/pokemonService";
import authService from "../services/authService";

export const apiCallsMapping = (action) => {
  const actionCallMap = {
    [pokemonsPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,
    [pokemonDetailsPageActions.GET_POKEMON_DETAILS_REQUEST]:
      PokemonService.getPokemonDetails,
    [loginPageActions.SIGN_IN_REQUEST]: authService.signIn,
  };

  return actionCallMap[action.type];
};
