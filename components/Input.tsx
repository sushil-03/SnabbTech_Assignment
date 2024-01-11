import React, { FC, useState } from "react";

interface InputRef {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  isError?: Boolean;
  errorMessage?: string;
}
const Input: FC<InputRef> = ({
  placeholder,
  type,
  value,
  name,
  onChange,
  isError = false,
  errorMessage = "",
}) => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className=" w-full">
      <div className="flex border-b border-light-gray pb-2">
        <input
          type={showMessage ? "text" : type}
          name={name}
          value={value}
          className={`outline-none  border-0 w-full ${
            !showMessage ? "text-active  " : "text-yellow"
          } ${
            !showMessage &&
            type === "password" &&
            value.length > 0 &&
            "customPasswordFamily"
          } `}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(name, e.target.value)
          }
        />
        {type === "password" &&
          (showMessage ? (
            <p
              className="underline cursor-pointer"
              onClick={() => setShowMessage(!showMessage)}
            >
              hide
            </p>
          ) : (
            <p
              className="underline cursor-pointer"
              onClick={() => setShowMessage(!showMessage)}
            >
              show
            </p>
          ))}
      </div>
      {isError && <p className="text-base text-gray mt-2">{errorMessage} </p>}
    </div>
  );
};

export default Input;
