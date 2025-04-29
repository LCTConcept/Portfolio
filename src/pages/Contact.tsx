import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

const Contact: React.FC = () => {
  //const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/contact_guide.pdf";
    link.download = "guide_lea.pdf"; // nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container">
      <div
        className="clickable-area contact-pnj"
        onClick={() => setShowForm(true)}
      />

      <div className="clickable-area guide-download" onClick={handleDownload} />

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Contact;
