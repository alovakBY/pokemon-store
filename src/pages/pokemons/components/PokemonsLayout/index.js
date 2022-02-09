import { PokemonCard } from "../PokemonCard";
import { Pagination } from "../../../../commonComponents/Pagination";
import { Spinner } from "../../../../commonComponents/Spinner";

import classes from "./PokemonLayout.module.css";

export const PokemonsLayout = ({
  pokemons,
  page,
  isLoading,
  loadingCart,
  idClickItem,
  handlePageChange,
  handleSetItemCart,
}) => {
  const pokemonsList = pokemons.map(({ id, name, image, price }) => (
    <PokemonCard
      loadingCart={idClickItem === id ? loadingCart : false}
      key={id}
      id={id}
      name={name}
      image={image}
      price={price}
      handleSetItemCart={handleSetItemCart}
    />
  ));
  return (
    <div>
      <div className={classes.listWrapper}>
        {isLoading ? <Spinner screen={true} /> : pokemonsList}
      </div>
      <div className={classes.paginationBlock}>
        <Pagination
          currentPage={page}
          pagesAmount={20}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
