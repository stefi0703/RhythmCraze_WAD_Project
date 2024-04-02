import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import CustomNavbar from "./components/CustomNavbar";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
