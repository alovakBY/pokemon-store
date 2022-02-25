import classes from "./OrderItem.module.css";

export const ActiveOrders = ({ itemsList, totalPrice, handleSetOrder }) => {
    const activeOrderItem = itemsList.map(({ id, ...pokemon }) => {
        return (
            <tr key={id} className={classes.tr}>
                <td className={classes.tdLeft}>
                    <img
                        className={classes.img}
                        src={pokemon.image}
                        alt="pokemon"
                    />
                    <div className={classes.nameWrapper}>
                        <span className={classes.name}>{pokemon.name}</span>
                        <span className={classes.symbol}>+</span>
                        <span className={classes.quantity}>
                            {pokemon.quantity}
                        </span>
                    </div>
                </td>
                <td>${pokemon.price * pokemon.quantity}</td>
            </tr>
        );
    });

    return (
        <>
            <table className={classes.table}>
                <thead>
                    <tr className={classes.tableTop}>
                        <th>Product</th>
                        <th>Subtotal</th>
                    </tr>
                    {activeOrderItem}
                    <tr className={classes.tableBottom}>
                        <th>Total</th>
                        <th>${totalPrice}</th>
                    </tr>
                </thead>
            </table>
            {/* <div className={classes.buttonWrapper}>
                <button onClick={handleSetOrder}>Place order</button>
            </div> */}
        </>
    );
};
