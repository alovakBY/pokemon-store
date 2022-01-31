import { NavLink } from "react-router-dom";

export const Pokemons = ({ name, id }) => {
    return (
        <div>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    );
};
