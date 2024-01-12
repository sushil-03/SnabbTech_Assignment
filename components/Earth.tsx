"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Earth = () => {
  const handleClick = () => {};
  return (
    <div className=" ">
      <div className="relative md:w-[700px] w-[500px] md:h-[30rem] h-[20rem] ">
        <Image
          src="/images/earth.png"
          fill
          alt="earth"
          className="object-contain relative "
        />
        <Image
          src="/images/avatar3.png"
          alt="avatar1"
          height={50}
          width={50}
          className="absolute top-6 md:left-48 left-32"
        />
        <Image
          src="/images/avatar2.png"
          alt="avatar1"
          height={50}
          width={50}
          className="absolute md:top-44 top-28 md:left-28 left-24"
        />
        <Image
          src="/images/avatar1.png"
          alt="avatar1"
          height={50}
          width={50}
          className="absolute md:bottom-28 bottom-20  md:right-64 right-52"
        />
      </div>
      <div className=" my-14  flex  justify-center">
        <Button
          value="Explorer la Travel Map"
          type="primary"
          onClick={handleClick}
          className=""
        />
      </div>
    </div>
  );
};

export default Earth;
