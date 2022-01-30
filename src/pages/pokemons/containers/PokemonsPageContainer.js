import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";
import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
  const token = useSelector((state) => state.loginPage.token);
  const dispatch = useDispatch();
  const { pokemons, isLoading, errors } = useSelector(pokemonPageSelector);

  useEffect(() => {
    console.log(token);
    dispatch(actions.GET_POKEMONS_REQUEST(token));
  }, []);

  if (errors) {
    console.log(errors);
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PokemonsLayout pokemons={pokemons} />
      )}
    </div>
  );
};
