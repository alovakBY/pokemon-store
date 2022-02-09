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
        return api.post("/auth/signup", signUpData);
    }

    signOut() {
        localStorage.clear();

        window.location.reload();
    }
}

export default AuthService.instance;
