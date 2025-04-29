import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const openBook = () => {
    navigate("/profilebook");
  };

  return (
    <div className="profile-container">
      <div className="clickable-area book-profile" onClick={openBook} />
    </div>
  );
};

export default Profile;
