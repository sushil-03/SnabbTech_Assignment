"use client";
import React, { useState } from "react";
import Union from "../../public/svg/Union";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { miniHeading } from "../../constant";

const Navbar = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div>
      <div className=" font-biz flex justify-between pt-10">
        <span className=" font-light">EN - FR</span>
        <Link href={"/"}>
          <div className="flex text-3xl gap-3 font-jost sm:flex-row flex-col">
            <span className=" "> Bienvenue </span>
            <div className="flex gap-2">
              <span>sur</span>
              <span className="flex font-kyivType items-center">
                P
                <p className="w-6 h-6 border-2 border-black  flex items-center justify-center rounded-t-full text-active">
                  <Union color="#A95454" height={12} width={12} />
                </p>
                NDA
              </span>
            </div>
          </div>
        </Link>
        <div className=" gap-6 text-sm xl:flex hidden">
          <Link href="/login">
            <span className="underline">Login </span>
          </Link>
          <Link href="/signup">
            <span className="underline">Signup </span>
          </Link>
        </div>
        <div className="xl:hidden ">
          <RxHamburgerMenu
            className="cursor-pointer"
            size={30}
            onClick={() => setShowDetail(true)}
          />
        </div>
      </div>
      {showDetail && (
        <div className="absolute inset-0 bg-black text-white z-[500] h-screen overflow-hidden ">
          <div className="flex items-end justify-end pt-24 pr-24">
            <RxCross2
              className="cursor-pointer"
              size={34}
              onClick={() => setShowDetail(false)}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex gap-8 flex-col   mx-auto font-biz items-start mt-24 ">
              <Link href={"/login"}>
                <span className=" whitespace-nowrap text-white  capitalize text-xl">
                  Login
                </span>{" "}
              </Link>
              <Link href={"/auth"}>
                <span className=" whitespace-nowrap text-white  capitalize text-xl">
                  Signup
                </span>
              </Link>
              {miniHeading.map((item, index) => (
                <span
                  key={index}
                  className=" whitespace-nowrap text-white  capitalize text-xl"
                >
                  {item.heading}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
