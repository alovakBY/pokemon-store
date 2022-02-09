import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePagination } from "../../../hooks";
import { useCart } from "../../../hooks/useCart";

import * as actions from "../actions";
// import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, errors } = useSelector(pokemonPageSelector);
    const [page, handlePageChange] = usePagination("pokemonsCurrentPage");
    const { setCartItem } = useCart();

    useEffect(() => {
        dispatch(actions.GET_POKEMONS_REQUEST(page));
    }, [page]);

    // if (errors) {
    //     console.log(errors);
    // }

    return (
        <>
            <PokemonsLayout
                pokemons={pokemons}
                handlePageChange={handlePageChange}
                page={page}
                isLoading={isLoading}
                setCartItem={setCartItem}
            />
        </>
    );
};
