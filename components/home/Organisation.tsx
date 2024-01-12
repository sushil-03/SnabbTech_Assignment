"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";

const Organisation = () => {
  return (
    <div className="font-jost md:my-10 my-5 flex gap-10 flex-col h-full">
      <div className="flex items-center lg:gap-20 gap-5 h-full lg:flex-row flex-col-reverse">
        <div className="lg:w-3/5 w-full">
          <div className=" mx-auto">
            <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-medium  leading-snug  lg:mt-20 mt-5 mb-6">
              “PANDA nous donne accès aux meilleurs talents dans leur domaine
              d&apos;activité et à de réelles perspectives de collaboration! ”
            </p>
            <p className="text-active lg:text-start  text-end pl-8">
              LGB Company
            </p>
          </div>
          <div className="flex h-full items-end mt-4">
            <div className="relative md:h-[20rem] sm:h-[10rem] h-[5rem] w-72 rounded-tl-full rounded-tr-full overflow-hidden ">
              {" "}
              <Image
                src="/images/person5.png"
                alt="expert3"
                fill
                className="object-contain  "
              />
            </div>
            <div className="relative md:h-[25rem] sm:h-[15rem] h-[10rem]  w-72 rounded-tl-full rounded-tr-full overflow-hidden ">
              {" "}
              <Image
                src="/images/person6.png"
                alt="expert2"
                fill
                className="object-contain  "
              />
            </div>
            <div className="relative md:h-[30rem] sm:h-[20rem] h-[15rem]   w-72   rounded-tl-full rounded-tr-full overflow-hidden ">
              <Image
                src="/images/building1.png"
                alt="expert1"
                fill
                className="object-contain  "
              />
            </div>
          </div>
        </div>
        <div className=" lg:w-1/3 w-full flex justify-between flex-col lg:min-h-[500px] md:min-h-[300px] sm:h-[250px] h-[200px]   ">
          <div className="flex gap-8 flex-col">
            <div className="lg:flex hidden  gap-4">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>
            <div className="md:text-5xl sm:text-4xl text-3xl gap-1  font-medium flex md:flex-col sm:flex-row flex-col">
              <span>Découvrez les </span>
              <span>organisation en Afrique</span>
            </div>
          </div>
          <div className="flex gap-10 flex-col">
            <p className="w-3/4">
              Trouvez les experts que vous recherchez, publiez vos offres
              d&apos;emploi et d&apos;autres contenus exclusifs sur votre
              organisation!{" "}
            </p>
            <div className=" gap-4 lg:hidden flex">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>
            <Button
              value="Voir tout"
              type="primary"
              onClick={() => {}}
              className=" w-3/5 md:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
