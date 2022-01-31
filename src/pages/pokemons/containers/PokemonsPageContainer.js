import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";
import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, errors } = useSelector(pokemonPageSelector);

    useEffect(() => {
        dispatch(actions.GET_POKEMONS_REQUEST());
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
