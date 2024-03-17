import { useEffect, useState } from "react";

type TypedProps = {
  textArray: string[];
};

const Typed = ({ textArray }: TypedProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState<number>(0);
  const [isShowCursor, setIsShowCursor] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const text: string = textArray[currentArrayIndex];

  useEffect(() => {
    const textLength = text.length;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentTextIndex + 1 > textLength) {
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
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentArrayIndex, isDeleting, text, currentTextIndex, textArray.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-bold inline-flex justify-center items-center">
      {text.substring(0, currentTextIndex)}
      <div
        className={`relative ml-1 inline-block ${
          isShowCursor ? "h-9" : "h-0"
        } w-0.5 bg-white duration-300`}
      ></div>
    </div>
  );
};

export default Typed;
