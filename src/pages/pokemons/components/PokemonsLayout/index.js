import { PokemonCard } from "../PokemonCard";
import { PaginationRounded } from "../../../../commonComponents/Pagination";
import { Spinner } from "../../../../commonComponents/Spinner";

import classes from "./PokemonLayout.module.css";

export const PokemonsLayout = ({
    pokemons,
    handlePageChange,
    currentPage,
    isLoading,
}) => {
    const pokemonsList = pokemons.map(({ id, name, image, price }) => (
        <PokemonCard key={id} id={id} name={name} image={image} price={price} />
    ));
    return (
        <div>
            <div className={classes.listWrapper}>
                {isLoading ? <Spinner /> : pokemonsList}
            </div>
            <div className={classes.paginationBlock}>
                <PaginationRounded
                    currentPage={currentPage}
                    pagesAmount={20}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
