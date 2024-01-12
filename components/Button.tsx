import React, { FC } from "react";
interface ButtonProps {
  type: "primary";
  value: string;
  onClick: (data: any) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ type, value, onClick, className }) => {
  return (
    <div>
      <button
        className={` font-biz rounded-full md:px-12 px-6 py-3 text-sm border border-black ${className}`}
        onClick={() => onClick("")}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
