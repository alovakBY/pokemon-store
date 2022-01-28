import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";
import { getPokemons } from "../services";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { useFetching } from "../../../hooks/useFetching";

export const PokemonsPageContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(({ pokemonsPage }) => pokemonsPage.pokemons);
    const { response, loading, errors } = useFetching(() => getPokemons());

    useEffect(() => {
        if (response) {
            dispatch(actions.GET_POKEMONS_ACTION(response.results));
        }
    }, [response]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <PokemonsLayout pokemons={pokemons} />
            )}
        </div>
    );
};
