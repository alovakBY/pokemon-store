import { memo } from "react";

import { ButtonCounter } from "../../../../commonComponents/ButtonCounter";
import { Spinner } from "../../../../commonComponents/Spinner";

import deleteCard from "../../../../static/images/delete-card.svg";

import classes from "./Card.module.css";

export const Card = memo(
    ({ id, name, image, price, quantity, cartLoading, deleteCartItem }) => {
        return (
            <div className={classes.card}>
                {cartLoading && <Spinner screen={false} />}
                <div className={classes.body}>
                    <div className={classes.left}>
                        <img src={image} alt={name} />
                        <button onClick={() => deleteCartItem(id)}>
                            <img src={deleteCard} alt={"delete"} />
                        </button>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.name}>{name}</div>
                        <div className={classes.price}>Unit Price ${price}</div>
                        <div className={classes.rightBottom}>
                            <div className={classes.button}>
                                <ButtonCounter
                                    id={id}
                                    name={name}
                                    image={image}
                                    price={price}
                                />
                            </div>
                            <div className={classes.totalPrice}>
                                ${quantity * price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
