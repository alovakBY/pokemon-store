import classes from "./OrderItem.module.css";

export const OrderItem = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className={classes.item}>
            <div className={classes.left}>
                <img src={pokemon.image} />
                <div>
                    {pokemon.name} x {pokemon.quantity}
                </div>
            </div>
            <div>${pokemon.price * pokemon.quantity}</div>
        </div>
    );
};
