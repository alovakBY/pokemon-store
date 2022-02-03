import api from "../api/config";

class AuthService {
    static instance = new AuthService();

    signIn({ email, password }) {
        const signInData = {
            email,
            password,
        };
        return api.post("/auth/signIn", signInData);
    }

    signUp(signUpData) {
        // const signUpData = {
        //     email,
        //     firstName,
        //     lastName,
        //     address: {
        //         country,
        //         city,
        //         addressLine1,
        //         addressLine2,
        //     },
        //     gender,
        //     password,
        //     phone,
        // };
        return api.post("/auth/signup", signUpData);
    }

    signOut() {
        localStorage.clear();

        window.location.reload();
    }
}

export default AuthService.instance;
