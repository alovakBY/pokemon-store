import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

export const Header = () => {
    const links = Object.entries(ROUTE_NAMES).map(([title, pathTo], i) => {
        return (
            <Link key={i} to={pathTo} style={{ margin: 10 }}>
                {title}
            </Link>
        );
    });

    return <div>{links}</div>;
};
