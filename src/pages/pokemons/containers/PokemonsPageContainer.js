import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePagination } from "../../../hooks";
import { useCart } from "../../../hooks/useCart";

import * as actions from "../actions";
// import { PokemonService } from "../../../services/pokemonService";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { pokemonPageSelector } from "../selectors";

export const PokemonsPageContainer = () => {
  const [idClickItem, setIdClickItem] = useState(0);
  const { pokemons, isLoading } = useSelector(pokemonPageSelector);
  const dispatch = useDispatch();

  const [page, handlePageChange] = usePagination("pokemonsCurrentPage");
  const { cartLoading } = useCart();

  useEffect(() => {
    dispatch(actions.GET_POKEMONS_REQUEST(page));
  }, [page, dispatch]);

  const handleSetIdClickItem = useCallback((id) => {
    setIdClickItem((state) => (state = id));
  }, []);

  return (
    <>
      <PokemonsLayout
        pokemons={pokemons}
        page={page}
        isLoading={isLoading}
        cartLoading={cartLoading}
        idClickItem={idClickItem}
        handlePageChange={handlePageChange}
        handleSetIdClickItem={handleSetIdClickItem}
      />
    </>
  );
};
