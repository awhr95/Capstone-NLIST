import "./Profile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const foundUser = sessionStorage.getItem("user_id");
  console.log(foundUser);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/users/${user}`);
      setProfile(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);

  function logOut() {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("token");
    setTimeout(() => {
      navigate("/homepage");
    }, 500);
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <button onClick={logOut}>log out</button>
      <h1>Profile Page</h1>
    </main>
  );
};

export default Profile;
