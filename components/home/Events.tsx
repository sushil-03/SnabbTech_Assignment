"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";

const Events = () => {
  return (
    <div className="font-jost my-10 flex gap-10 flex-col h-full">
      <div className="flex items-center gap-10 h-full ">
        <div className=" w-1/3 flex justify-between flex-col  min-h-[500px]   ">
          <div className="flex gap-8 flex-col">
            <div className="flex gap-4">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="md:text-5xl sm:text-4xl text-3xl gap-1  font-medium flex flex-col  ">
                <span>Evénements </span>
                <span>à venir</span>
              </div>
              <p className="text-medium">Publié par: Pablo Diahuno</p>
              <Image
                src="/images/person4.png"
                height={60}
                width={60}
                alt="avatar"
                className="rounded-full "
              />
            </div>
          </div>
          <div className="flex gap-10 flex-col">
            <p className="lg:w-3/5 w-full">
              Sortez votre carnet d&apos;adresses! Restez informés de tous les
              événements à venir autour du business en Afrique organisés en
              Afrique ou à l&apos;étranger.
            </p>
            <Button
              value="Publier ou voir les événements "
              type="primary"
              onClick={() => {}}
              className=" w-1/2 px-0 lg:block hidden"
            />
          </div>
        </div>
        <div className=" md:w-2/3 w-full flex justify-between pr-10 lg:flex-row flex-col ">
          <div className="relative lg:h-[30rem] h-[20rem]   lg:w-[450px]  rounded-full overflow-hidden ">
            <Image
              src="/images/group.png"
              alt="group"
              fill
              className="object-contain  "
            />
          </div>

          <div className=" font-biz font-semibold text-sm flex gap-3 flex-col ">
            <p>
              L&apos;événement:{" "}
              <span className="text-active">The Nancy party&apos;s</span>{" "}
            </p>
            <p>
              Date: <span className="text-active"> 10/07/22</span>{" "}
            </p>
            <p>
              Lieu: <span className="text-active">Senegal</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
