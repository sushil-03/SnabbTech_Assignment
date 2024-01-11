import React, { FC } from "react";
interface ButtonProps {
  type: "primary";
  value: string;
  onClick: (data: any) => void;
}

const Button: FC<ButtonProps> = ({ type, value, onClick }) => {
  return (
    <div>
      <button
        className=" font-biz rounded-full px-12 py-3 text-sm border border-black"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
