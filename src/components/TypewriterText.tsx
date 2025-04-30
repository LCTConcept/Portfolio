import React, { useEffect, useState } from "react";
import "./TypewriterText.css";

interface Props {
  text: string;
  speed?: number;
}

const TypewriterText: React.FC<Props> = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.substring(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="typewriter-output">{displayedText}</span>;
};

export default TypewriterText;
