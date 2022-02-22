import classes from "./OrderItem.module.css";

export const OrderItem = ({ pokemon }) => {
    return (
        <tr className={classes.tr}>
            <td className={classes.tdLeft}>
                <img className={classes.img} src={pokemon.image} />
                <div className={classes.nameWrapper}>
                    <span className={classes.name}>{pokemon.name}</span>
                    <span className={classes.symbol}>+</span>
                    <span className={classes.quantity}>{pokemon.quantity}</span>
                </div>
            </td>
            <td>${pokemon.price * pokemon.quantity}</td>
        </tr>
    );
};
