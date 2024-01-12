"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";

const Testimonials = () => {
  return (
    <div className="font-jost my-20 flex gap-10 flex-col h-full ">
      <div className="flex items-center gap-10 h-full ">
        <div className=" lg:w-1/3 w-full flex justify-between flex-col  lg:min-h-[400px]   ">
          <div className="flex flex-row w-full justify-between">
            <div className="flex gap-8 flex-col">
              <div className="flex flex-col gap-6">
                <div className="lg:hidden flex gap-4">
                  <div className="h-1 w-20  rounded-md flex">
                    <p className="w-10 h-full bg-black"></p>
                    <p className="w-full h-full bg-light-gray"></p>
                  </div>
                  <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

                  <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
                </div>

                <p className="md:text-5xl sm:text-4xl text-3xl   font-medium ">
                  Témoignages
                </p>
                <div className=" font-biz font-semibold sm:text-sm text-xs flex gap-6 flex-col ">
                  <span>
                    Diaspora Member:
                    <p className="text-active">Artur Luison</p>
                  </span>
                  <span>
                    Job Position:
                    <p className="text-active"> Manager</p>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="relative md:h-[20rem]   md:w-[20rem] h-[10rem] w-[10rem] rounded-full overflow-hidden">
                <Image
                  src="/images/person3.png"
                  alt="group"
                  fill
                  className="object-fit  "
                />
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-col">
            <p className="lg:w-3/5 w-full font-semibold lg:mt-0 mt-5">
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </p>
            <div className="flex flex-col gap-12">
              <p className="font-bold font-biz">
                Very Nice Atmosphere and experience with “Welcome to PANDA”
              </p>
              <p className="font-jost">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
              <p>
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:flex hidden justify-between pr-10 ">
          <div className="relative h-[30rem]   w-[30rem] rounded-full overflow-hidden">
            <Image
              src="/images/person3.png"
              alt="group"
              fill
              className="object-fit  "
            />
          </div>

          <div className="   text-sm  gap-16 flex-col w-2/5 px-12 pt-16 flex ">
            <div className="flex gap-4">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>
            <div className="flex flex-col gap-12">
              <p className="font-bold font-biz">
                Very Nice Atmosphere and experience with “Welcome to PANDA”
              </p>
              <p className="font-jost">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
              <p>
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
