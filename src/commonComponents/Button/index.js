import { memo } from "react";

import classes from "./Button.module.css";

export const Button = memo(({ text, disabled, type, callback }) => {
    return (
        <button
            className={classes.button}
            disabled={disabled}
            type={type}
            onClick={callback}
        >
            {text}
        </button>
    );
});
