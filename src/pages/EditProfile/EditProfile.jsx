import "./EditProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiUrl = process.env.REACT_APP_URL;
const port = process.env.REACT_APP_PORT;

const EditProfile = ({ user }) => {
  const [error, setError] = useState({});
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/users/${user}`);
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

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const editedElement = {
  //       warehouse_name: warehouse.warehouse_name,
  //       address: warehouse.address,
  //       city: warehouse.city,
  //       country: warehouse.country,
  //       contact_name: warehouse.contact_name,
  //       contact_position: warehouse.contact_position,
  //       contact_phone: warehouse.contact_phone,
  //       contact_email: warehouse.contact_email,
  //     };

  //     if (isFormValid()) {
  //       await axios.put(
  //         `${apiUrl}${port}/api/warehouses/${warehouseId}`,
  //         editedElement
  //       );
  //       navigate("/warehouses");
  //     } else {
  //       console.log(editedElement);
  //     }
  //   };

  return <p>hello</p>;
};

export default EditProfile;
