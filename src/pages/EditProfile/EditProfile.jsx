import "./EditProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/backarrow.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FailedAuth from "../../components/FailedAuth/FailedAuth";
import { notifySuccess, notifyError } from "../../utils/utils";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const EditProfile = () => {
  const [error, setError] = useState({});
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [failedAuth, setFailedAuth] = useState(false);

  const foundUser = sessionStorage.getItem("user_id");

  const fetchProfile = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return setFailedAuth(true);
    }
    try {
      const { data } = await axios.get(`${apiUrl}:${port}/users/${foundUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(data);
    } catch (error) {
      console.error({ error: error.message });
      return setFailedAuth(true);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  if (!profile || failedAuth) {
    return <FailedAuth />;
  }
  const isFormValid = () => {
    if (!profile.user_name) {
      return setError({ ...error, user_name: true });
    }
    if (!profile.email) {
      return setError({ ...error, email: true });
    }
    if (!profile.bio) {
      return setError({ ...error, bio: true });
    }
    if (!profile.first_name) {
      return setError({ ...error, first_name: true });
    }
    if (!profile.last_name) {
      return setError({ ...error, last_name: true });
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedElement = {
      user_name: profile.user_name,
      email: profile.email,
      bio: profile.bio,
      first_name: profile.first_name,
      last_name: profile.last_name,
    };

    if (isFormValid()) {
      const foundUser = sessionStorage.getItem("user_id");
      const token = sessionStorage.getItem("token");
      if (!token) {
        return setFailedAuth(true);
      }
      await axios.put(
        `${apiUrl}:${port}/users/account/${foundUser}`,
        editedElement,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess("Changes Made!");
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } else {
      notifyError("Please fill all fields!");
    }
  };

  return (
    <main className="edit">
      <div className="edit__back">
        <Link className="edit__backlink" to={"/profile"}>
          <img src={backArrow} alt="back arrow" />
        </Link>
      </div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">User Name</label>
        <input
          type="text"
          name="user_name"
          value={profile.user_name}
          onChange={handleChange}
          placeholder="Your username...."
          autoComplete="off"
          className="form__input"
        />
        <label className="form__label">Email</label>
        <input
          type="text"
          name="email"
          value={profile.email}
          onChange={handleChange}
          autoComplete="off"
          className="form__input"
        />
        <label className="form__label">Bio</label>
        <input
          type="text-area"
          placeholder="A bit about you...."
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          autoComplete="off"
          className="form__input form__bio"
        />
        <label className="form__label">First Name</label>
        <input
          type="text"
          name="first_name"
          placeholder="first name...."
          value={profile.first_name}
          onChange={handleChange}
          autoComplete="off"
          className="form__input"
        />
        <label className="form__label">Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="last name...."
          value={profile.last_name}
          onChange={handleChange}
          autoComplete="off"
          className="form__input"
        />
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
        <section className="form__buttons">
          <button className="form__submit" type="submit">
            Confirm changes
          </button>
          <Link to={"/profile"} className="form__cancel">
            Cancel
          </Link>
        </section>
      </form>
    </main>
  );
};

export default EditProfile;
