"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[]; 
  speed?: number; 
  pause?: number; 
}

export function Typewriter({ texts, speed = 80, pause = 1500 }: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0); 
  const [charPos, setCharPos] = useState(0); 
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      // typing forward
      if (charPos < currentText.length) {
        timeout = setTimeout(() => {
          setDisplay(currentText.slice(0, charPos + 1));
          setCharPos(charPos + 1);
        }, speed);
      } else {
        // pause before deleting
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      // deleting backward
      if (charPos > 0) {
        timeout = setTimeout(() => {
          setDisplay(currentText.slice(0, charPos - 1));
          setCharPos(charPos - 1);
        }, speed / 2);
      } else {
        // move to next phrase
        setDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charPos, deleting, index, texts, speed, pause]);

  return (
    <span className="inline items-center text-sm text-[0.74rem] leading-5 text-(--muted) font-mono sm:text-sm sm:leading-6">
      {display}
      <span className="border-r-2 border-current animate-pulse ml-0.5" aria-hidden="true" />
    </span>
  );
}
