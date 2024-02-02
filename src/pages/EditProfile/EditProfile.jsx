import "./EditProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/Input";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const EditProfile = () => {
  const [error, setError] = useState({});
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const foundUser = sessionStorage.getItem("user_id");

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/users/${foundUser}`);
      setProfile(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  if (!profile) {
    return <section>Loading...</section>;
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
      await axios.put(
        `${apiUrl}:${port}/users/account/${foundUser}`,
        editedElement
      );
      navigate("/profile");
    } else {
      console.log(editedElement);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="form">
        <label>User Name</label>
        <input
          type="text"
          name="user_name"
          value={profile.user_name}
          onChange={handleChange}
          autoComplete="off"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={profile.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <label>Bio</label>
        <input
          type="text-area"
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          autoComplete="off"
        />
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={profile.first_name}
          onChange={handleChange}
          autoComplete="off"
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={profile.last_name}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Confirm changes</button>
      </form>
    </main>
  );
};

export default EditProfile;
