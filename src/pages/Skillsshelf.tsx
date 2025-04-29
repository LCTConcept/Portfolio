import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skillsshelf.css";

const Skillsshelf: React.FC = () => {
  const navigate = useNavigate();

  const nextSection = () => {
    navigate("/Projects");
  };

  return (
    <div className="skillshelf-container">
      <div className="clickable-area next-section" onClick={nextSection} />
    </div>
  );
};

export default Skillsshelf;
