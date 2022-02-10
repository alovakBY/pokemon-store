import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePagination } from "../../../hooks";
import { useCart } from "../../../hooks/useCart";

import * as actions from "../actions";
// import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";
import { cartSelector } from "../../cart/selectors";

export const PokemonsPageContainer = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, errors } = useSelector(pokemonPageSelector);
    const [page, handlePageChange] = usePagination("pokemonsCurrentPage");
    const { cartLoading, getCartItems, setCartItem } = useCart();
    const [idClickItem, setIDClickItem] = useState(0);

    useEffect(() => {
        dispatch(actions.GET_POKEMONS_REQUEST(page));
    }, [page]);

    const handleSetItemCart = useCallback(({ id, name, image, price }) => {
        setCartItem({ id, name, image, price });
        setIDClickItem((state) => (state = id));
    }, []);

    return (
        <>
            <PokemonsLayout
                pokemons={pokemons}
                handlePageChange={handlePageChange}
                page={page}
                isLoading={isLoading}
                cartLoading={cartLoading}
                idClickItem={idClickItem}
                handleSetItemCart={handleSetItemCart}
            />
        </>
    );
};
