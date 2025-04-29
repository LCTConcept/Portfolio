import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profilebook.css";

const ProfileBook: React.FC = () => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);

  const pages = [
    {
      background: "/assets/picturebook_pageone.png",
      onNext: () => setPageNumber(1),
    },
    {
      background: "/assets/picturebook_pagetwo.png",
      onNext: () => setPageNumber(2),
    },
    {
      background: "/assets/picturebook_lastpage.png",
      onNext: () => navigate("/Contact"),
    },
  ];

  const handlePrevious = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleCloseBook = () => {
    if (pageNumber === pages.length - 1) {
      navigate("/Contact"); // Si on est à la dernière page, aller à Skills
    } else {
      navigate("/Profile"); // Sinon, revenir à la pile de livres
    }
  };

  return (
    <div
      className="profilebook-container"
      style={{ backgroundImage: `url(${pages[pageNumber].background})` }}
    >
      {/* Close Book visible sur toutes */}
      <div className="clickable-area close-book" onClick={handleCloseBook} />

      {/* Next page */}
      {pageNumber < pages.length - 1 && (
        <div
          className="clickable-area next-page"
          onClick={pages[pageNumber].onNext}
        />
      )}

      {/* Previous page */}
      {pageNumber > 0 && (
        <div
          className="clickable-area previous-page"
          onClick={handlePrevious}
        />
      )}
    </div>
  );
};

export default ProfileBook;
