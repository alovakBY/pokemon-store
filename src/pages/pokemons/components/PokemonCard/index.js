import { NavLink } from "react-router-dom";

import classes from "./PokemonCard.module.css";

export const PokemonCard = ({ id, name, image, price }) => {
    return (
        <div className={classes.card}>
            <NavLink to={`${id}`} className={classes.link}>
                <div className={classes.image}>
                    <img src={image} alt={name} />
                </div>
                <div className={classes.name}>{name}</div>
                <div className={classes.price}>${price}</div>
                <button className={classes.button}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                    >
                        <path
                            data-name="Path 9"
                            d="M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z"
                            transform="translate(-137.782 -137.783)"
                            fill="#212121"
                        ></path>
                    </svg>
                </button>
            </NavLink>
        </div>
    );
};
