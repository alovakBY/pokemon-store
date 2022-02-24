import { Accordion } from "../../../../commonComponents/Accordion";

export const CompletedOrders = (orders) => {
    console.log(orders);
    const completedOrdersList = orders.map(
        ({ createdAt, totalPrice, itemsList }) => {
            const description = itemsList.map(({ name, price }) => (
                <div>
                    {name} {price}
                </div>
            ));
            return (
                <Accordion
                    title={
                        <div>
                            {createdAt} {totalPrice}
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
