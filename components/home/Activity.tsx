import Image from "next/image";
import React from "react";
import { activities } from "../../constant";
import Union from "../../public/svg/Union";
const Activity = () => {
  return (
    <div className="font-jost md:my-20 my-10 flex gap-10 flex-col h-full ">
      <div className="flex items-center lg:gap-10 md:gap-6 gap-2 h-full ">
        <div className=" lg:w-1/2 w-full  flex justify-between flex-col  min-h-[400px]   ">
          <div className="flex gap-12 flex-col items-center">
            <p className="md:text-5xl sm:text-4xl text-3xl gap-1  font-medium ">
              Top 5 des domaines d’activités <br /> porteurs en Afrique{" "}
            </p>

            <div className="relative lg:h-[20rem]   lg:w-[20rem] h-[10rem] w-[10rem] rounded-full overflow-hidden">
              <Image
                src="/images/agri.png"
                alt="group"
                fill
                className="object-fit  "
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-between md:pr-10 pr-4">
          <div className="   text-sm flex gap-16 flex-col w-full px-12 pt-16">
            <div className="flex gap-4">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>
            <div className="flex flex-col  md:gap-8 gap-5 font-jost">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-center lg:text-2xl sm:text-xl text-lg font-medium ${
                    index == 1 && "text-active"
                  }`}
                >
                  <Union />
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
