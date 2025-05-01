import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TypewriterText from "../components/TypewriterText";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="andarna-wrapper">
        <div className="speech-bubble">
          <TypewriterText
            text="Hi there ! I’m Andarna. 
Ready for the tour of Léa's library ? 
Let’s start in the Room of Experiences.
Click on the stairs and I’ll follow you."
            speed={40}
          />
        </div>
        <div className="andarna-avatar">
          <img src="/assets/Andarna_flyingright.png" alt="Andarna Avatar" />
        </div>
      </div>

      <div className="experiences" onClick={() => goToPage("/experiences")} />
    </div>
  );
};

export default Home;
