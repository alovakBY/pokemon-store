import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";
import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
    const [currentPage, setCurrentPage] = useState(
        +localStorage.getItem("pokemonsCurrentPage") || 1
    );
    const { pokemons, isLoading, errors } = useSelector(pokemonPageSelector);
    const dispatch = useDispatch();

    const handlePageChange = useCallback((_, page) => {
        setCurrentPage((state) => (state = page));
    }, []);

    useEffect(() => {
        dispatch(actions.GET_POKEMONS_REQUEST(currentPage));
        localStorage.setItem("pokemonsCurrentPage", `${currentPage}`);
    }, [currentPage]);

    if (errors) {
        console.log(errors);
    }

    return (
        <>
            <PokemonsLayout
                pokemons={pokemons}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                isLoading={isLoading}
            />
        </>
    );
};
