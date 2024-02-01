import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import OpportunityPage from "./pages/OpportunityPage/OpportunityPage";
import CreateOpportunity from "./pages/CreateOpportunity/CreateOpportunity";

function App() {
  //use effect grab user and state for user
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route
          path="/opportunity/:opportunityId"
          element={<OpportunityPage />}
        />
        <Route path="/create-opportunity" element={<CreateOpportunity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
