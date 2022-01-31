import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonDetails } from "../components/PokemonDetails";

import * as actions from "../actions";
import { pokemonDetailsPageSelector } from "../selectors";

export const PokemonDetailsContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, errors, pokemonInfo } = useSelector(
        pokemonDetailsPageSelector
    );
    useEffect(() => {
        dispatch(actions.GET_POKEMON_DETAILS_REQUEST(id));
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <PokemonDetails pokemonInfo={pokemonInfo} />
            )}
        </div>
    );
};
