import { Accordion } from "../../../../commonComponents/Accordion";

import classes from "./CompletedOrders.module.css";

export const CompletedOrders = ({ orders }) => {
    const ordersSort = [...orders].reverse();

    const completedOrdersList = ordersSort.map(
        ({ createdAt, totalPrice, itemsList }, index) => {
            const date = createdAt.split("T")[0];

            const description = itemsList.map(
                ({ name, price, image, quantity }) => (
                    <div className={classes.descriptionItem} key={name}>
                        <div className={classes.left}>
                            <div className={classes.image}>
                                <img src={image} alt="pokemon" />
                                {name}
                            </div>
                            <div className={classes.quantity}>
                                <span>+</span>
                                {quantity}
                            </div>
                        </div>
                        <div>${price}</div>
                    </div>
                )
            );

            return (
                <Accordion
                    key={index}
                    title={
                        <div className={classes.title}>
                            <div>{date}</div>
                            <div>${totalPrice}</div>
                        </div>
                    }
                    description={description}
                />
            );
        }
    );

    return <div>{completedOrdersList}</div>;
};

// const description = itemsList.map({name,price} => <div>{name} {price}</div>)
