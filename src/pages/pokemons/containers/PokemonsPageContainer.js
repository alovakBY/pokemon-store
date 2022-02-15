import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePagination } from "../../../hooks";
import { useCart } from "../../../hooks/useCart";

import * as actions from "../actions";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
    const { clickedPokemonId } = useCart();
    const { pokemons, isLoading } = useSelector(pokemonPageSelector);
    const dispatch = useDispatch();

    const [page, handlePageChange] = usePagination("pokemonsCurrentPage");
    const { cartLoading } = useCart();

    useEffect(() => {
        dispatch(actions.GET_POKEMONS_REQUEST(page));
    }, [page, dispatch]);

    return (
        <>
            <PokemonsLayout
                pokemons={pokemons}
                page={page}
                isLoading={isLoading}
                cartLoading={cartLoading}
                clickedPokemonId={clickedPokemonId}
                handlePageChange={handlePageChange}
            />
        </>
    );
};
