import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
}

export default App;
