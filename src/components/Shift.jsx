import React, { useState, useRef } from "react";

export default function Shift({ text, interval = 100, className = "", style = {} }) {
const [content, setContent] = useState(text);
  const intervalRef = useRef(null);

  function randomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      if (text[i] === " ") {
        result += " ";
        continue;
      }
      
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleMouseEnter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setContent(randomString(text.length));
    }, interval);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setContent(text);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ cursor: "pointer",...style }}
    >
      {content}
    </span>
  );
}
