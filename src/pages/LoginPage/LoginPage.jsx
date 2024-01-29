import "./LoginPage.scss";
import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import nlistLogo from "../../assets/logos/NList-logos.jpeg";

const LoginPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/users/login",
        {
          email: event.target.email.value,
          password: event.target.password.value,
        }
      );

      sessionStorage.setItem("token", response.data.token);

      navigate("/homepage");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <main className="login">
      <header className="login__header">
        <img className="login__logo" src={nlistLogo}></img>
      </header>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="login__button">Log in</button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <p>
        Need an account? <Link to="/signup">Sign up</Link>
      </p>
      <p>
        F.A.Q <Link to="/signup">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginPage;
