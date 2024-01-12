import React from "react";
import { functionalities } from "../../constant";
import Union from "../../public/svg/Union";
import Earth from "../Earth";

const Functionality = () => {
  return (
    <div className="font-jost my-10 flex gap-10 flex-col ">
      <p className="md:text-5xl sm:text-4xl text-3xl  font-medium">
        Fonctionnalités
      </p>
      <div className="flex items-center xl:flex-row flex-col">
        <div className="flex md:gap-6 gap-2 my-4  flex-wrap xl:w-2/3 md:w-3/4 sm:w-5/6 w-full">
          {functionalities.map((functionality, index) => (
            <div
              key={index}
              className={`px-1 py-6 border-2 border-light-gray  flex items-center flex-col lg:gap-6 md:gap-4 gap-3 md:w-64 w-52  relative   ${
                index < functionalities.length / 2
                  ? "rounded-tl-full rounded-tr-full  border-t-0"
                  : "rounded-b-full border-b-0"
              }`}
            >
              <div
                className={`h-32 md:w-64 w-52 border-2 border-active  absolute  
              ${
                index < functionalities.length / 2
                  ? "rounded-tl-full rounded-tr-full top-0 border-b-0"
                  : "rounded-bl-full rounded-br-full bottom-0 border-t-0"
              }`}
              ></div>
              <Union />
              <p className="md:text-xl text-lg font-medium uppercase text-center ">
                {functionality.heading}
              </p>
              <p className="text-center p-2 mx-6 md:text-base text-sm ">
                {functionality.message}
              </p>
            </div>
          ))}
        </div>
        <Earth />
      </div>
    </div>
  );
};

export default Functionality;
