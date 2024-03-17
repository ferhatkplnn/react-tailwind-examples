import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  text: string;
};

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-white text-black font-bold py-3 px-12 rounded-lg hover:scale-105 duration-300 `}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
