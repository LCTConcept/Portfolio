import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const openBook = () => {
    navigate("/projectsbook");
  };

  return (
    <div className="projects-container">
      <div className="clickable-area book-projects" onClick={openBook} />
    </div>
  );
};

export default Projects;
