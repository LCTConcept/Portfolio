import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projectsbook.css";

const ProjectBook: React.FC = () => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);

  const pages = [
    {
      background: "/assets/project_page_one.png",
      onNext: () => setPageNumber(1),
    },
    {
      background: "/assets/project_last_page.png",
      onNext: () => navigate("/Profile"),
    },
  ];

  const handlePrevious = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleCloseBook = () => {
    if (pageNumber === pages.length - 1) {
      navigate("/Profile");
    } else {
      navigate("/Projects");
    }
  };

  return (
    <div
      className="projectbook-container"
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

export default ProjectBook;
