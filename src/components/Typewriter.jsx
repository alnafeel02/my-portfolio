// TypeWriterFramer.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypeWriterFramer = ({
  words = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "MERN Stack Developer"],
  typingSpeed = 150,    // ms per character for typing
  deletingSpeed = 80,   // ms per character for deleting
  delayBetween = 1500,  // ms after full word typed before deleting
  loop = true,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Controls process of typing/deleting
  useEffect(() => {
    let timeout;

    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Fully typed, wait then delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Done deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, words, currentWordIndex, typingSpeed, deletingSpeed, delayBetween, loop]);

  return (
    <span className={className} style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayedText}  // re-render when text changes
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='sm:text-4xl text-2xl flex flex-wrap mt-6 bg-gradient-to-br from-red-600 to-purple-600 text-transparent bg-clip-text'
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="cursor sm:text-5xl text-4xl"
        style={{ marginLeft: "2px" }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        |
      </motion.span>
    </span>
  );
};

export default TypeWriterFramer;
