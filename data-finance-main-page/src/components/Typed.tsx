import { useEffect, useState } from "react";

type TypedProps = {
  textArray: string[];
};

const Typed = ({ textArray }: TypedProps) => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [isShowCursor, setIsShowCursor] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const text: string = textArray[arrayIndex];

  useEffect(() => {
    const textLength = text.length;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (textIndex + 1 > textLength) {
          setIsDeleting(true);
        } else {
          setTextIndex(textIndex + 1);
        }
      } else {
        if (textIndex - 1 < 0) {
          const nextArrayIndex = (arrayIndex + 1) % textArray.length;
          setArrayIndex(nextArrayIndex);
          setTextIndex(0);
          setIsDeleting(false);
        } else {
          setTextIndex(textIndex - 1);
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [arrayIndex, isDeleting, text, textIndex, textArray.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-bold inline-flex justify-center items-center">
      {text.substring(0, textIndex)}
      <div
        className={`relative ml-1 inline-block ${
          isShowCursor ? "h-9" : "h-0"
        } w-0.5 bg-white duration-300`}
      ></div>
    </div>
  );
};

export default Typed;
