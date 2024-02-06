import "./Profile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../../assets/icons/user.svg";
import FooterNav from "../../components/FooterNav/FooterNav";
import backArrow from "../../assets/icons/backarrow.svg";
import edit from "../../assets/icons/Edit.svg";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const Profile = ({ user, setUser }) => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const foundUser = sessionStorage.getItem("user_id");
      const token = sessionStorage.getItem("token");
      if (!token) {
        return setFailedAuth(true);
      }
      try {
        const { data } = await axios.get(
          `${apiUrl}:${port}/users/${foundUser}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(data);
      } catch (error) {
        setFailedAuth(true);
        console.error(error.message);
      }
    };

    fetchProfile();
  }, []);

  function logOut() {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="profile">
        <div className="profile__back">
          <Link className="profile__backlink" to={"/"}>
            <img src={backArrow} alt="back arrow" />
          </Link>
        </div>
        <section className="profile__header">
          <article className="profile__header-container">
            <div className="profile__title-box">
              <img
                className="profile__pic"
                src={userImg}
                alt="user profile"
              ></img>
              <h1 className="profile__title">
                {" "}
                {profile.first_name
                  ? `${profile.first_name}'s Profile Page`
                  : "Your Profile Page"}
              </h1>
              <Link to={"/edit-profile"}>
                <img src={edit} alt="edit profile"></img>
              </Link>
            </div>
          </article>
          <article className="profile__stats">
            <h3 className="profile__stats-title">Stats</h3>
            <div className="profile__stats-container">
              <div className="profile__stat">
                <h3 className="profile__subtitle">Volunteered</h3>
                <div className="prfile__">
                  <p>{profile.total_opportunities}</p>
                </div>
              </div>
              <div className="profile__stat">
                <h3 className="profile__subtitle">Live opportunities </h3>{" "}
                <div>
                  <p>{profile.opportunities.length}</p>
                </div>
              </div>
              <div className="profile__stat">
                <h3 className="profile__subtitle">Rating </h3>
                <div>
                  <p>4.5*</p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="profile__reviews">
          <h3>Reviews:</h3>
          <p>This volunteer was great 5 *</p>
        </section>
        <section className="profile__bio">
          <div className="profile__section-header">
            <h3>Bio:</h3>{" "}
            <Link to={"/edit-profile"}>
              <img
                className="profile__edit-img"
                src={edit}
                alt="edit profile"
              ></img>
            </Link>
          </div>
          <p>{profile.bio}</p>
        </section>
        <section className="profile__experience">
          <div className="profile__section-header">
            <h3>Experience:</h3>
            <Link to={"/edit-profile"}>
              <img
                className="profile__edit-img"
                src={edit}
                alt="edit profile"
              ></img>
            </Link>
          </div>
          <p>
            I have 12 years experience working as a volunteer mostly in the
            events space.
          </p>
          <p>I am first aid qualified</p>
          <p>
            I have supervised volunteers at 4 sporting events including the
            london marathon
          </p>
        </section>
        <button className="profile__logout" onClick={logOut}>
          log out
        </button>
      </main>

      <FooterNav />
    </>
  );
};

export default Profile;
