import { PokemonCard } from "../PokemonCard";
import { Pagination } from "../../../../commonComponents/Pagination";
import { Spinner } from "../../../../commonComponents/Spinner";

import classes from "./PokemonLayout.module.css";

export const PokemonsLayout = ({
    pokemons,
    page,
    isLoading,
    handlePageChange,
    setCartItem,
}) => {
    const pokemonsList = pokemons.map(({ id, name, image, price }) => (
        <PokemonCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            setCartItem={setCartItem}
        />
    ));
    return (
        <div>
            <div className={classes.listWrapper}>
                {isLoading ? <Spinner /> : pokemonsList}
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
