//Import setup
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// Import content (pages) and CSS styles
import { experiencePages } from "../content/experiencePages";
import "./ExperienceBookReact.css";
import "../content/experiencePages.css";

// Functional component for the Experience Book :
// This component uses the HTMLFlipBook library to create a flipbook effect for the experience pages
const ExperienceBookReact: React.FC = () => {
  const bookRef = useRef<any>(null);

  const handleFlipNext = () => {
    bookRef.current.pageFlip().flipNext("bottom"); // Flip to the next page with corner animation
  };

  const handleFlipPrev = () => {
    bookRef.current.pageFlip().flipPrev("bottom"); // Flip to the previous page with corner animation
  };

  /*Functions will be used later to add more features (sounds...)
  const handleFlip = (e: any) => {
    console.log("Page flipped to:", e.data); // index de la page actuelle
  };
  const handleStateChange = (e: any) => {
    console.log("State changed:", e.data); // "user_fold", "flipping", etc.
  };*/

  // Use of HTMLFlipBook to create the book and insert the pages
  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        style={{}} // Mandatory to avoid a warning in the console
        startPage={0} // Start on the first page
        width={850}
        height={800}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.5}
        showCover={true} // First and last pages are covers
        mobileScrollSupport={true}
        flippingTime={1500} // Page flip duration in milliseconds
        drawShadow={true}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true} // Show flipable corners
        disableFlipByClick={false} // Allow clicking to flip pages
        className="demo-book"
        ref={bookRef} // Reference to the book for programmatic control
      >
        {/* Front Cover */}
        <div className="page-cover" data-density="hard">
          <img
            src="/assets/xpbookcover_V2.png"
            alt="Experience Book Cover"
            className="cover-image"
          />
        </div>

        {/* Inner Pages */}
        {experiencePages.map((page) => (
          <div key={page.id} className="page">
            <div className="page-img">
              {/* Images */}
              {page.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt || `Image ${index + 1}`}
                  className={`page-image ${img.className}`}
                />
              ))}

              {page.title && <h2>{page.title}</h2>}

              {page.texts?.map((textBlock, i) => (
                <div
                  key={i}
                  className={`page-text-block ${textBlock.className}`}
                >
                  {textBlock.src.split("\n").map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Blank page to complete a spread */}
        <div className="page" />

        {/* Back cover */}
        <div className="page-cover" data-density="hard">
          <img
            src="/assets/xpbookbackcover_V2.png"
            alt="Back Cover"
            className="cover-image"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default ExperienceBookReact;
