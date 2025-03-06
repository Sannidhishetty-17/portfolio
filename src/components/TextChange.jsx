import React, { useState, useEffect } from "react";
import styles from "./textchange.module.css";

const TextChange = () => {
  const texts = [
    "Hi, I'm Sannidhi!",
    "Welcome to my world!",
    "Let's create something amazing!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the currentText based on the direction
      setCurrentText(texts[textIndex].substring(0, charIndex));

      if (isForward) {
        // Move forward
        if (charIndex < texts[textIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        // Move backward
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop to the next text
        }
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex, texts]);

  return <div className={styles.Name}>{currentText}</div>;
};

export default TextChange;
