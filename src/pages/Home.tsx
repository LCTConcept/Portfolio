import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div
        className="clickable-area experiences"
        onClick={() => goToPage("/experiences")}
      />
    </div>
  );
};

export default Home;
