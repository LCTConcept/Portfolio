import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./ExperienceBookReact.css";

const ExperienceBookReact: React.FC = () => {
  const bookRef = useRef<any>(null);

  const handleFlipNext = () => {
    bookRef.current.pageFlip().flipNext("bottom"); // ← effet visuel en coin bas
  };

  const handleFlipPrev = () => {
    bookRef.current.pageFlip().flipPrev("bottom");
  };

  const handleFlip = (e: any) => {
    console.log("Page flipped to:", e.data); // index de la page actuelle
  };

  const handleStateChange = (e: any) => {
    console.log("State changed:", e.data); // "user_fold", "flipping", etc.
  };

  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        style={{}}
        startPage={0}
        width={800}
        height={800}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        flippingTime={1000}
        drawShadow={true}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className="demo-book"
      >
        {/* Front Cover Page */}
        <div className="w-full h-full relative" data-density="hard">
          <img
            src="/1.png"
            alt="Back Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Inner Pages */}
        {[1, 2, 3, 4, 5].map((page) => (
          <div
            key={page}
            className="bg-white border border-gray-300 text-xl w-full h-full text-black p-6"
          >
            <div className="flex flex-col justify-center h-full">
              <p className="text-justify">
                <strong>Page {page}:</strong> Im a paragraph. Click here to add
                your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the
                font. This is a great space to write a long text about your
                company and your services. You can use this space to go into a
                little more detail about your company. Talk about your team and
                what services you provide.
              </p>
            </div>
          </div>
        ))}
        {/* Blank page before back cover */}
        <div className="bg-white border border-gray-300 w-full h-full" />
        {/* Back Cover Page */}
        <div className="w-full h-full relative" data-density="hard">
          <img
            src="/2.png"
            alt="Back Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default ExperienceBookReact;
