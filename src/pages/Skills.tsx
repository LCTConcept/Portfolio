import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const Skills: React.FC = () => {
  const navigate = useNavigate();

  const lookAtShelf = () => {
    navigate("/skillsshelf");
  };

  return (
    <div className="skills-container">
      <div className="clickable-area skills-shelf" onClick={lookAtShelf} />
    </div>
  );
};

export default Skills;
