import { NavLink } from "react-router-dom";

export const Pokemons = ({ name }) => {
    return (
        <div>
            <NavLink to={name}>{name}</NavLink>
        </div>
    );
};
