import React from "react";
import { useNavigate } from "react-router-dom";
import "./Experiences.css";
import TypewriterText from "../components/TypewriterText";

const Experiences: React.FC = () => {
  const navigate = useNavigate();

  const openBook = () => {
    navigate("/experiencebook");
  };

  return (
    <div className="experiences-container">
      <div className="andarna-wrapper-xp">
        <div className="speech-bubble-xp">
          <TypewriterText
            text="See that grimoire ? 
This isn’t just a book. It’s a memory keeper.
All her experiences are waiting inside.
Go on, give it a click."
            speed={40}
          />
        </div>
        <div className="andarna-avatar-xp">
          <img
            src="/assets/Andarna_pointingright_shadow.png"
            alt="Andarna Avatar"
          />
        </div>
      </div>

      <div className="book-experiences" onClick={openBook} />
    </div>
  );
};

export default Experiences;
