import React from "react";
import { useNavigate } from "react-router-dom";
import "./Experiences.css";

const Experiences: React.FC = () => {
  const navigate = useNavigate();

  const openBook = () => {
    navigate("/experiencebook");
  };

  return (
    <div className="experiences-container">
      <div className="clickable-area book-experiences" onClick={openBook} />
    </div>
  );
};

export default Experiences;
