import { useState } from "react";

export const Login = ({ handleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <div>
          Введите email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Введите пароль:{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={(e) => handleSignIn(e, email, password)}>
          Войти
        </button>
      </form>
    </div>
  );
};
