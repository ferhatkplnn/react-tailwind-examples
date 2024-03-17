import { useEffect, useState } from "react";

type TypedProps = {
  textArray: string[];
};

const Typed = ({ textArray }: TypedProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const text: string = textArray[currentArrayIndex];

  useEffect(() => {
    const textLength = text.length;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentTextIndex + 1 > textLength + 4) {
          setIsDeleting(true);
        } else {
          setCurrentTextIndex(currentTextIndex + 1);
        }
      } else {
        if (currentTextIndex - 1 < 0) {
          const nextArrayIndex = (currentArrayIndex + 1) % textArray.length;
          setCurrentArrayIndex(nextArrayIndex);
          setCurrentTextIndex(0);
          setIsDeleting(false);
        } else {
          setCurrentTextIndex(currentTextIndex - 1);
        }
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentArrayIndex, isDeleting, text, currentTextIndex, textArray.length]);

  return (
    <span>
      {text.substring(0, currentTextIndex)}
      <span className="animate-cursor">|</span>
    </span>
  );
};

export default Typed;
