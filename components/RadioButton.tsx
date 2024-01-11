import React, { FC } from "react";
import Union from "../public/svg/Union";
interface RadioButton {
  id: string;
  name: string;
  value: string;
  text: string;
  onChange: (value: string) => void;
  checked: any;
}
const RadioButton: FC<RadioButton> = ({
  id,
  name,
  value,
  text,
  onChange,
  checked,
}) => {
  return (
    <div className="flex items-center">
      {" "}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className=" opacity-0 relative"
      />
      <div className="cursor-pointer" onClick={() => onChange(value)}>
        <p className="w-8 h-8 border-2    border-light-gray  mr-4 rounded-md flex items-center justify-center">
          {checked && <Union height={20} width={20} />}
        </p>
      </div>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default RadioButton;
