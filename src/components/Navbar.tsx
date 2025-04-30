import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // pense à créer ce fichier

const Navbar: React.FC = () => {
  return (
    <nav className="custom-navbar">
      <ul>
        <li>
          <Link to="/">Lobby</Link>
        </li>
        <li>
          <Link to="/experiences">Room of Experiences</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
