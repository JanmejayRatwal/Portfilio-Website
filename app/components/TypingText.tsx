"use client";

import { useEffect, useState } from "react";

const words = [
  "Software Developer",
  "Backend Developer",
  "AI/ML Builder",
  "Automation Enthusiast",
];

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // Pause after finishing the word
    if (!isDeleting && text === currentWord) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);

      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        setText(currentWord.slice(0, text.length - 1));

        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      }
    }, isDeleting ? 80 : 130);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <p className="mb-4 min-h-6 text-sm uppercase tracking-[0.3em] text-purple-300">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </p>
  );
}