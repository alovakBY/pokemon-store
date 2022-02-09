import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonDetails } from "../components/PokemonDetails";

import * as actions from "../actions";
import { pokemonDetailsPageSelector } from "../selectors";
import { Spinner } from "../../../commonComponents/Spinner";

export const PokemonDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, errors, pokemonInfo } = useSelector(
    pokemonDetailsPageSelector
  );
  useEffect(() => {
    dispatch(actions.GET_POKEMON_DETAILS_REQUEST(id));
  }, []);

  if (errors) {
    console.log(errors);
  }

  return (
    <div>
      {isLoading ? (
        <Spinner screen={true} />
      ) : (
        <PokemonDetails pokemonInfo={pokemonInfo} />
      )}
    </div>
  );
};
