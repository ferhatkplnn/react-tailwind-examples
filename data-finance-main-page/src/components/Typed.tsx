import { useEffect, useState } from "react";

const Typed = ({ textArray }: { textArray: string[] }) => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [isShowCursor, setIsShowCursor] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const text: string = textArray[arrayIndex];

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!isDelete) {
        if (textIndex + 1 > text.length) {
          setIsDelete(true);
        } else {
          setTextIndex(textIndex + 1);
        }
      } else {
        if (textIndex - 1 < 0) {
          if (arrayIndex + 1 >= textArray.length) {
            setArrayIndex(0);
            setTextIndex(0);
            setIsDelete(false);
          } else {
            setIsDelete(false);
            setArrayIndex(arrayIndex + 1);
          }
        } else {
          setTextIndex(textIndex - 1);
        }
      }
    }, 300);
    return () => clearTimeout(timerId);
  }, [arrayIndex, isDelete, text.length, textArray.length, textIndex]);

  useEffect(() => {
    const timerId = setInterval(
      () =>
        setIsShowCursor((prev) => {
          return !prev;
        }),
      500
    );
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="  font-bold inline-flex justify-center items-center">
      {text.substring(0, textIndex)}{" "}
      <div
        className={`relative  ml-1 inline-block ${
          isShowCursor ? "h-5" : "h-0"
        } w-0.5 bg-white duration-300`}
      ></div>
    </div>
  );
};

export default Typed;
