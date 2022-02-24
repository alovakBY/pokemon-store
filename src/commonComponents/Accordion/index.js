import {
    Accordion as AccordionMUI,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import classes from "./Accordion.module.css";

export const Accordion = ({ title, description }) => {
    return (
        <AccordionMUI key={title}>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <div className={classes.title}>{title}</div>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.text}>{description}</div>
            </AccordionDetails>
        </AccordionMUI>
    );
};
