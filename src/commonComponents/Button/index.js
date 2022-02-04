import classes from "./index.module.css";

export const Button = ({ text, disabled, type }) => {
    console.log(disabled);
    return (
        <button className={classes.button} disabled={disabled} type={type}>
            {text}
        </button>
    );
};
