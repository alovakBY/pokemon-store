import { CircularProgress } from "@mui/material";

// import spinner from "../../static/images/spinner.png";
import spinner from "../../static/images/poke-spinner.svg";

import classes from "./Spinner.module.css";

export const Spinner = ({ screen }) => {
  return (
    <div className={screen ? classes.screen : classes.window}>
      <img className={classes.spinner} src={spinner} />
    </div>
  );
};
