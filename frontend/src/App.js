import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import CustomNavbar from "./components/CustomNavbar";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import ConcertList from "./components/ConcertList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistList from "./components/ArtistList";
import VenueList from "./components/VenueList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/concerts" element={<ConcertList />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/venues" element={<VenueList />} />
      </Routes>
    </Router>
  );
}

export default App;
