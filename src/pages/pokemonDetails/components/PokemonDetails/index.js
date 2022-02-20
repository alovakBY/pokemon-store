import { ButtonCounter } from "../../../../commonComponents/ButtonCounter";

import dollar from "../../../../static/images/dollar.svg";

import classes from "./PokemonDetails.module.css";

export const PokemonDetails = ({
    id,
    name,
    image,
    price,
    abilitiesBlock,
    statsBlock,
}) => {
    return (
        <>
            <div className={classes.pokemonDetails}>
                <div className={classes.left}>
                    <img className={classes.image} src={image} />
                </div>
                <div className={classes.right}>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.price}>
                        <img src={dollar} alt="dollar" />
                        {price}
                        <div className={classes.buttonPrice}>
                            <ButtonCounter
                                id={id}
                                name={name}
                                image={image}
                                price={price}
                            />
                        </div>
                    </div>
                    <div className={classes.stats}>{statsBlock}</div>
                </div>
            </div>
            <div className={classes.abilities}>
                <div className={classes.abilitiesTitle}>abilities</div>
                <div className={classes.abilitiesBottom}>{abilitiesBlock}</div>
            </div>
        </>
    );
};
