import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

export const Header = () => {
  return (
    <div>
      <NavLink to={ROUTE_NAMES.HOME} style={{ margin: 10 }}>
        HOME
      </NavLink>
      <NavLink to={ROUTE_NAMES.SIGN_IN} style={{ margin: 10 }}>
        SIGN IN
      </NavLink>
      <NavLink to={ROUTE_NAMES.POKEMONS} style={{ margin: 10 }}>
        POKEMONS
      </NavLink>
    </div>
  );
};
