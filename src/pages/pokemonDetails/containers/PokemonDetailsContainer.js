import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonDetails } from "../components/PokemonDetails";

import * as actions from "../actions";
import { pokemonDetailsPageSelector } from "../selectors";

export const PokemonDetailsContainer = () => {
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const { isLoading, errors, pokemonDetails } = useSelector(
    pokemonDetailsPageSelector
  );
  useEffect(() => {
    dispatch(actions.GET_POKEMON_DETAILS_REQUEST(pokemon));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PokemonDetails
          name={pokemonDetails.name}
          imgSrc={
            pokemonDetails.sprites.other["official-artwork"]["front_default"]
          }
        />
      )}
    </div>
  );
};
