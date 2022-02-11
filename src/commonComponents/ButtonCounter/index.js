import { memo } from "react";
import { useCart } from "../../hooks/useCart";
import classes from "./ButtonCounter.module.css";

export const ButtonCounter = memo(({ name, id, image, price }) => {
    const { cartInfo, setCartItem, updateCartItem } = useCart();

    const pokemonItemInCart = cartInfo.itemsList.find((itemCart) => {
        return id === itemCart.id;
    });

    const handleUpdateCartItemIncrement = () => {
        const pokemonItemIncrement = cartInfo.itemsList.find((itemCart) => {
            return id === itemCart.id;
        });
        updateCartItem({
            id: pokemonItemIncrement.id,
            quantity: pokemonItemIncrement.quantity + 1,
        });
    };

    return pokemonItemInCart ? (
        <div className={classes.buttonsWrapper}>
            <button className={classes.button} /* onClick={onSetItemCart} */>
                <span>-</span>
            </button>
            <span className={classes.screen}>{pokemonItemInCart.quantity}</span>
            <button
                className={classes.button}
                onClick={handleUpdateCartItemIncrement}
            >
                <span>+</span>
            </button>
        </div>
    ) : (
        <div className={classes.buttonWrapper}>
            <button
                className={classes.button}
                onClick={() => setCartItem({ name, id, image, price })}
            >
                <span>+</span>
            </button>
        </div>
    );
});
