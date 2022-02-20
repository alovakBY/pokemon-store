import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { Spinner } from "../../../../commonComponents/Spinner";
import { PokemonDetails } from "../PokemonDetails";

import { POKEMON_DETAILS_STATS_IMAGES } from "../../constants";

import classes from "./PokemonDetailsLayout.module.css";

export const PokemonDetailsLayout = ({
    pokemonInfo,
    isLoading,
    cartLoading,
}) => {
    const { id, name, image, price, abilities, stats } = pokemonInfo;

    const abilitiesBlock = abilities.map((ability) => {
        return (
            <Accordion key={ability.title}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <div className={classes.abilityTitle}>{ability.title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.abilityText}>
                        {ability.description}
                    </div>
                </AccordionDetails>
            </Accordion>
        );
    });

    const statsBlock = stats.map(({ title, value }) => {
        return (
            <div key={title} className={classes.stat}>
                <div className={classes.statTitle}>{title}</div>
                <div className={classes.statBottom}>
                    <img
                        className={classes.statImg}
                        src={POKEMON_DETAILS_STATS_IMAGES[title]}
                        alt={title}
                    />
                    {value}
                </div>
            </div>
        );
    });

    return isLoading ? (
        <Spinner screen={true} />
    ) : (
        <>
            <PokemonDetails
                id={id}
                name={name}
                image={image}
                price={price}
                abilitiesBlock={abilitiesBlock}
                statsBlock={statsBlock}
            />
            {cartLoading ? <Spinner screen={true} /> : null}
        </>
    );
};
