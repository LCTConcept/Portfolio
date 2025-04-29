import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="contact-container">
      <div
        className="clickable-area contact-pnj"
        onClick={() => goToPage("/")}
      />

      <div
        className="clickable-area contact-guide"
        onClick={() => goToPage("/contact")}
      />
    </div>
  );
};

export default Contact;
