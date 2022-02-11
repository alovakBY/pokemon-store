import { memo } from "react";
import { NavLink } from "react-router-dom";
import { ButtonCounter } from "../../../../commonComponents/ButtonCounter";

import { Spinner } from "../../../../commonComponents/Spinner";
import { useCart } from "../../../../hooks/useCart";

import dollar from "../../../../static/images/dollar.svg";

import classes from "./PokemonCard.module.css";

export const PokemonCard = memo(
    ({ id, name, image, price, cartLoading, handleSetIdClickItem }) => {
        const onSetItemCart = () => {
            handleSetIdClickItem(id);
        };

        return (
            <div className={classes.card} onClick={onSetItemCart}>
                {cartLoading ? <Spinner /> : null}
                <NavLink to={`${id}`} className={classes.link}>
                    <div className={classes.image}>
                        <img src={image} alt={name} />
                    </div>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.price}>
                        <img src={dollar} alt={price} />
                        {price}
                    </div>
                </NavLink>
                <ButtonCounter
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                />
            </div>
        );
    }
);
