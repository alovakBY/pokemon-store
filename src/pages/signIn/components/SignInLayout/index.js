import { NavLink } from "react-router-dom";

import { SignIn } from "../SignIn";
import { Spinner } from "../../../../commonComponents/Spinner";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

export const SignInLayout = ({ isLoading, errors, handleSignIn }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <div>
                Don't have an account?{" "}
                <NavLink to={ROUTE_NAMES.SIGN_UP}>Sign UP</NavLink>
            </div>
            <SignIn handleSignIn={handleSignIn} />
            {errors && <div>{errors}</div>}
        </>
    );
};
