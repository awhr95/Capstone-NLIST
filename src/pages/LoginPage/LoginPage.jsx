import "./LoginPage.scss";
import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import nlistLogo from "../../assets/logos/NList-logos.jpeg";

const LoginPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };
  const isFormValid = () => {
    if (!formFields.email) {
      return setError({ ...error, email: true });
    }
    if (!formFields.password) {
      return setError({ ...error, password: true });
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid()) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/users/login`,
          {
            email: event.target.email.value,
            password: event.target.password.value,
          }
        );

        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.id);

        navigate("/");
      } catch (error) {
        setError(error.response);
      }
    }
  };
  return (
    <main className="login">
      <header className="login__header">
        <img className="login__logo" alt="logo" src={nlistLogo}></img>
      </header>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" onChange={handleChange} />
        <Input
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <button type="submit" className="login__button">
          Log in
        </button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <section className="login__links">
        <Link className="login__signup-link" to="/signup">
          <p className="login__signup">Need an account?</p>
          <p className="login__signup">Sign up here</p>
        </Link>

        <Link className="login__faq" to="/FAQ">
          FAQ
        </Link>
      </section>
    </main>
  );
};

export default LoginPage;
