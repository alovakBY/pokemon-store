import { memo } from "react";

import { ButtonCounter } from "../../../../commonComponents/ButtonCounter";
import { Spinner } from "../../../../commonComponents/Spinner";

import classes from "./Card.module.css";

export const Card = memo(({ id, name, image, price, cartLoading }) => {
    return (
        <div className={classes.card}>
            {cartLoading ? <Spinner screen={false} /> : null}
            <div className={classes.body}>
                <h4>{name}</h4>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>{price}</div>
                <ButtonCounter
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                />
            </div>
        </div>
    );
});
