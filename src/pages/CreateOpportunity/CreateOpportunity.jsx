import "./CreateOpportunity.scss";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const CreateOpportunity = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const [formFields, setFormFields] = useState({
    title: "",
    description: "",
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
      title: formFields.title,
      description: formFields.description,
      date_of_opportunity: formFields.date_of_opportunity,
      start_time_of_opportunity: formFields.start_time_of_opportunity,
      end_time_of_opportunity: formFields.end_time_of_opportunity,
      number_of_volunteers_needed: formFields.number_of_volunteers_needed,
    };

    if (isFormValid()) {
      setTimeout(() => {
        navigate("/homepage");
      }, 500);
      try {
        await axios.post(
          `${apiUrl}:${port}/opportunities/create-opportunity`,
          createdOpp
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit}>
        <h1>Create Opportunity</h1>
        <Input
          onChange={handleChange}
          type="text"
          name="title"
          label="Title"
          className=""
        />
        <Input
          onChange={handleChange}
          type="textarea"
          name="description"
          label="Description"
          className=""
        />
        <Input
          onChange={handleChange}
          type="date"
          name="date_of_opportunity"
          label="Date of Opportunity"
          className=""
        />
        <Input
          onChange={handleChange}
          type="time"
          name="start_time_of_opportunity"
          label="Start Time"
          className=""
        />
        <Input
          onChange={handleChange}
          type="time"
          name="end_time_of_opportunity"
          label="End Time"
          className=""
        />
        <Input
          onChange={handleChange}
          type="number"
          name="number_of_volunteers_needed"
          label="Number of Volunteers Needed"
          className=""
        />
        <button type="submit"> Create New Opportunity</button>
        <Link to="/homepage">Cancel</Link>
      </form>
    </main>
  );
};

export default CreateOpportunity;
