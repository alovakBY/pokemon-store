import { useCallback, useState, memo, useEffect, useMemo } from "react";

import { useCart } from "../../hooks/useCart";

import classes from "./ButtonCounter.module.css";

export const ButtonCounter = memo(({ name, id, image, price }) => {
    const { cartInfo, setCartItem, updateCartItem, deleteCartItem } = useCart();

    const pokemonItemInCart = useMemo(() => {
        return cartInfo.itemsList.find((itemCart) => {
            return id === itemCart.id;
        });
    }, [cartInfo]);

    const handleSetCartItem = useCallback(() => {
        setCartItem({ name, id, image, price });
    }, []);

    const handleUpdateCartItemIncrement = useCallback(() => {
        const pokemonItemIncrement = cartInfo.itemsList.find((itemCart) => {
            return id === itemCart.id;
        });
        updateCartItem({
            id: pokemonItemIncrement.id,
            quantity: pokemonItemIncrement.quantity + 1,
        });
    }, [cartInfo]);

    const handleUpdateCartItemDecrement = useCallback(() => {
        const pokemonItemIncrement = cartInfo.itemsList.find((itemCart) => {
            return id === itemCart.id;
        });
        updateCartItem({
            id: pokemonItemIncrement.id,
            quantity: pokemonItemIncrement.quantity - 1,
        });
    }, [cartInfo]);

    const handleDeleteCartItem = useCallback(() => {
        deleteCartItem(id);
    }, [cartInfo]);

    return pokemonItemInCart ? (
        <div className={classes.buttonsWrapper}>
            <button
                className={classes.button}
                onClick={
                    pokemonItemInCart.quantity === 1
                        ? handleDeleteCartItem
                        : handleUpdateCartItemDecrement
                }
            >
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
            <button className={classes.button} onClick={handleSetCartItem}>
                <span>+</span>
            </button>
        </div>
    );
});
