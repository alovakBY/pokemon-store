import api from "../api/config";

class AuthService {
  static instance = new AuthService();

  signIn({ email, password }) {
    const authData = {
      email,
      password,
    };
    console.log(authData);
    return api.post("/auth/signIn", authData);
  }

  signUp() {}
}

export default AuthService.instance;
