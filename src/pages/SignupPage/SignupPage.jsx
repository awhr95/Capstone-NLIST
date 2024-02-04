import Input from "../../components/Input/Input";
import "./SignupPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import nlistLogo from "../../assets/logos/NList-logos.jpeg";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        const userSignUp = await axios.post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/users/register`,
          {
            email: event.target.email.value,
            password: event.target.password.value,
          }
        );
        sessionStorage.setItem("user_id", userSignUp.data.id);
        console.log(userSignUp.data.id);
        navigate("/login");
      } catch (error) {
        event.target.reset();
        setError(error.response);
      }
    }
  };

  return (
    <main className="signup">
      <header className="signup__header">
        <img className="signup__logo" alt="logo" src={nlistLogo}></img>
      </header>
      <form className="signup__form" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>
        <Input type="text" name="email" label="Email" onChange={handleChange} />
        <Input
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <button className="signup__button">Sign up</button>
        <p>{error}</p>
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;
