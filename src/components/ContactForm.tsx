import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  onClose: () => void;
}

const ContactForm: React.FC<Props> = ({ onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5mjkvyu",
        "template_3vmpxa4",
        form.current,
        "P58hjV4Hgpkm8hlO_"
      )
      .then(() => {
        alert("📬 Message envoyé avec succès !");
        onClose();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        alert("Une erreur est survenue. Réessaie plus tard.");
      });
  };

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle bg-white border rounded p-4 shadow-lg"
      style={{ zIndex: 1000, width: "90%", maxWidth: "500px" }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label d-block">You are :</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="you_are"
              value="Recruiter"
              id="recruiter"
            />
            <label className="form-check-label" htmlFor="recruiter">
              Recruiter
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="you_are"
              value="Future client"
              id="client"
            />
            <label className="form-check-label" htmlFor="client">
              Future client
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="you_are"
              value="Other"
              id="other"
            />
            <label className="form-check-label" htmlFor="other">
              Else
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Name :</label>
          <input type="text" className="form-control" name="name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone number :</label>
          <input type="tel" className="form-control" name="phone" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email :</label>
          <input type="email" className="form-control" name="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message :</label>
          <textarea className="form-control" name="message" rows={4} required />
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClose}
          >
            Fermer
          </button>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
