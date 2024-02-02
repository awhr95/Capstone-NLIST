import "./Profile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../../assets/icons/user.svg";
import FooterNav from "../../components/FooterNav/FooterNav";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const foundUser = sessionStorage.getItem("user_id");
  console.log(foundUser);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/users/${foundUser}`);
      setProfile(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);

  // console.log(liveOppNumber(profile.opportunities));
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
      <h1>Your Profile Page</h1>
      <section>
        <div>
          <img src={userImg} alt="user profile"></img>
          <h2>{profile.first_name}</h2>
        </div>
        <div>
          <h3>Volunteered</h3>
          <div>
            <p>{profile.total_opportunities}</p>
            <p>times</p>
          </div>
        </div>
        <div>
          <h3>Ongoing opportunities </h3>
          <div>
            <p>{profile.opportunities.length}</p>
            <p>times</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Reviews:</h2>
        <p>This volunteer was great 5 *</p>
      </section>
      <section>
        <h2>Bio:</h2>
        <p>{profile.bio}</p>
      </section>
      <section>
        <h2>Experience:</h2>
        <p>{profile.bio}</p>
      </section>
      <button onClick={logOut}>log out</button>
      <Link to={"/edit-profile"}>Edit Profile</Link>
      <FooterNav />
    </main>
  );
};

export default Profile;
