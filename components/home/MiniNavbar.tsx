import React from "react";
import { miniHeading } from "../../constant";
const MiniNavbar = () => {
  return (
    <div className="w-full xl:block hidden">
      <div className="flex gap-8  justify-between w-4/5 mx-auto font-biz">
        {miniHeading.map((item, index) => (
          <span
            key={index}
            className=" whitespace-nowrap text-black text-sm capitalize"
          >
            {item.heading}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MiniNavbar;
