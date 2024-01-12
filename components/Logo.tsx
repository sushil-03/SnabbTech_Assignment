import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="lg:w-full  w-screen">
      <Link href="/">
        <p className=" text-white lg:text-4xl text-3xl  font-kyivType lg:text-start text-center lg:pl-10 pl-0">
          Welcome to PANDA
        </p>
      </Link>
    </div>
  );
};

export default Logo;
