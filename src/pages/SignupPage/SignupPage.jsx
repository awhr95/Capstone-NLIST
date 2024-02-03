import Input from "../../components/Input/Input";
import "./SignupPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      navigate("/");
    } catch (error) {
      event.target.reset();
      setError(error.response);
    }
  };

  return (
    <main className="signup-page">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="signup__button">Sign up</button>
        <p>{error}</p>
      </form>
      <p>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default Signup;
