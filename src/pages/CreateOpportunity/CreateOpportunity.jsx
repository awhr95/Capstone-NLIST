import "./CreateOpportunity.scss";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import FooterNav from "../../components/FooterNav/FooterNav";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backArrow from "../../assets/icons/backarrow.svg";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const CreateOpportunity = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const user = sessionStorage.getItem("user_id");
  const notify = () =>
    toast.success("Listing Created!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formFields, setFormFields] = useState({
    title: "",
    description: "",
    type: "",
    date_of_opportunity: "",
    start_time_of_opportunity: "",
    end_time_of_opportunity: "",
    number_of_volunteers_needed: 0,
  });

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };
  const isFormValid = () => {
    if (!formFields.title) {
      return setError({ ...error, title: true });
    }
    if (!formFields.description) {
      return setError({ ...error, description: true });
    }
    if (!formFields.type) {
      return setError({ ...error, type: true });
    }
    if (!formFields.date_of_opportunity) {
      return setError({ ...error, date_of_opportunity: true });
    }
    if (!formFields.start_time_of_opportunity) {
      return setError({ ...error, start_time_of_opportunity: true });
    }
    if (!formFields.end_time_of_opportunity) {
      return setError({ ...error, end_time_of_opportunity: true });
    }
    if (!formFields.number_of_volunteers_needed) {
      return setError({ ...error, number_of_volunteers_needed: true });
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createdOpp = {
      user_id: user,
      title: formFields.title,
      description: formFields.description,
      type: formFields.type,
      date_of_opportunity: formFields.date_of_opportunity,
      start_time_of_opportunity: formFields.start_time_of_opportunity,
      end_time_of_opportunity: formFields.end_time_of_opportunity,
      number_of_volunteers_needed: formFields.number_of_volunteers_needed,
    };

    if (isFormValid()) {
      notify();
      setTimeout(() => {
        navigate("/homepage");
      }, 5000);
      try {
        await axios.post(
          `${apiUrl}:${port}/opportunities/create-opportunity`,
          createdOpp
        );
      } catch (error) {
        console.log({ error: error.message });
      }
    }
  };

  return (
    <main className="create-op">
      <div className="create-op__back">
        <Link className="create-op__backlink" to={"/homepage"}>
          <img src={backArrow} alt="back arrow" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="create-op__form">
        <h1 className="create-op__title">Create Opportunity</h1>
        <label className="create-op__label" htmlFor="title">
          Title
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          className={`create-op__input ${
            error.title && `create-op__input-error`
          }`}
          placeholder="Please add a title"
        />
        <label className="create-op__label" htmlFor="description">
          Description
        </label>

        <textarea
          onChange={handleChange}
          name="description"
          className={`create-op__input create-op__description ${
            error.title && `create-op__input--error`
          }`}
          placeholder="Please add a detailed description"
        />
        <label className="create-op__label" htmlFor="description">
          Type
        </label>
        <select
          id="type"
          name="type"
          onChange={handleChange}
          className="create-op__input create-op__type"
          placeholder="Please add a detailed description"
        >
          <option value="Charity">Charity</option>
          <option value="Events">Events</option>
          <option value="Community">Community</option>
          <option value="One-Off">One-off</option>
          <option value="Education">Education</option>
        </select>

        <label className="create-op__label" htmlFor="date">
          Date of Opportunity
        </label>

        <input
          onChange={handleChange}
          type="date"
          name="date_of_opportunity"
          className="create-op__input create-op__number"
        />
        <label className="create-op__label" htmlFor="start-time">
          Start Time
        </label>
        <input
          onChange={handleChange}
          type="time"
          name="start_time_of_opportunity"
          className="create-op__input create-op__number"
        />
        <label className="create-op__label" htmlFor="end-time">
          End Time
        </label>

        <input
          onChange={handleChange}
          type="time"
          name="end_time_of_opportunity"
          className="create-op__input create-op__number"
        />
        <label
          className="create-op__label"
          htmlFor="number_of_volunteers_needed"
        >
          Number of Volunteers
        </label>

        <input
          onChange={handleChange}
          type="number"
          name="number_of_volunteers_needed"
          className="create-op__input create-op__number"
        />
        <div className="create-op__buttons">
          <button className="create-op__submit" type="submit">
            Create New Opportunity
          </button>
          <Link className="create-op__cancel" to="/homepage">
            Cancel
          </Link>
        </div>
      </form>
      <FooterNav />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </main>
  );
};

export default CreateOpportunity;
