import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import OpportunityPage from "./pages/OpportunityPage/OpportunityPage";
import CreateOpportunity from "./pages/CreateOpportunity/CreateOpportunity";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyList from "./pages/MyList/MyList";
import SavedList from "./pages/SavedList/SavedList";
import OppMap from "./pages/OppMapp/OppMap";

function App() {
  const [user, setUser] = useState(null);
  const [opportunityType, setOpportunityType] = useState(null);

  useEffect(() => {
    const foundUser = sessionStorage.getItem("user_id");
    setUser(foundUser);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={<Profile setUser={setUser} user={user} />}
        />
        <Route path="/edit-profile" element={<EditProfile user={user} />} />
        <Route
          path="/"
          element={
            <HomePage setUser={setUser} user={user} oppType={opportunityType} />
          }
        />
        <Route
          path={"/:oppType"}
          element={
            <HomePage setUser={setUser} user={user} oppType={opportunityType} />
          }
        />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/mylist/:oppType" element={<MyList />} />
        <Route path="/saved" element={<SavedList />} />
        <Route path="/saved/:oppType" element={<SavedList />} />
        <Route path="/map" element={<OppMap />} />
        <Route
          path="/opportunity/:opportunityId"
          element={<OpportunityPage setUser={setUser} user={user} />}
        />
        <Route path="/create-listing" element={<CreateOpportunity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
