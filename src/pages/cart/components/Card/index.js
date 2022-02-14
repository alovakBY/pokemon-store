import { ButtonCounter } from "../../../../commonComponents/ButtonCounter";

import classes from "./Card.module.css";

export const Card = ({ id, name, image, price }) => {
    return (
        <div className={classes.body}>
            <h4>{name}</h4>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>{price}</div>
            <ButtonCounter id={id} name={name} image={image} price={price} />
        </div>
    );
};
