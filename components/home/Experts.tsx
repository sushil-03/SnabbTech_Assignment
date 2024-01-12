"use client";
import React from "react";
import { companies } from "../../constant";
import Button from "../Button";
import Image from "next/image";

const Experts = () => {
  return (
    <div className="font-jost md:my-10 my-4 flex gap-10 flex-col h-full">
      <div className="flex items-center gap-10 h-full lg:flex-row flex-col">
        <div className=" lg:w-1/3 w-full flex justify-between  flex-col  lg:min-h-[500px] md:min-h-[300px] sm:h-[250px] h-[200px]   ">
          <div className="flex gap-8 flex-col">
            <div className=" gap-4 lg:flex hidden">
              <div className="h-1 w-20  rounded-md flex">
                <p className="w-10 h-full bg-black"></p>
                <p className="w-full h-full bg-light-gray"></p>
              </div>
              <p className="h-1 w-20 bg-light-gray rounded-md">{""}</p>

              <p className="h-1 w-20 bg-light-gray rouneded-md">{""}</p>
            </div>

            <div className="md:text-5xl sm:text-4xl text-3xl  font-medium flex md:flex-col flex-row">
              <span>Découvrez</span>
              <span>les experts</span>
            </div>
          </div>
          <div className="flex gap-10 flex-col">
            <p className="sm:w-3/4 w-full">
              Connectez-vous avec des organisations africaines, postulez au job
              de vos rêves en Afrique ou partagez votre expertise même à
              distance!
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
        <div className="lg:w-3/5 w-full">
          <div className=" mx-auto">
            <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-medium  leading-snug  md:mt-20 mt-5 mb-6">
              “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
              offre d'emploi pour le poste de web developer publiée sur PANDA et
              le mois suivant je commençais à travailler à Dakar! ”
            </p>
            <p className="text-active text-end">Omar Ndiaye</p>
          </div>
          <div className="flex h-full items-end">
            <div className="relative md:h-[30rem] sm:h-[20rem] h-[15rem]   w-72   rounded-tl-full rounded-tr-full overflow-hidden ">
              <Image
                src="/images/person10.png"
                alt="expert1"
                fill
                className="object-contain  "
              />
            </div>

            <div className="relative md:h-[25rem] sm:h-[15rem] h-[10rem]  w-72 rounded-tl-full rounded-tr-full overflow-hidden ">
              <Image
                src="/images/person8.png"
                alt="expert2"
                fill
                className="object-contain  "
              />
            </div>

            <div className="relative md:h-[20rem] sm:h-[10rem] h-[5rem] w-48 rounded-tl-full rounded-tr-full overflow-hidden ">
              <Image
                src="/images/person7.png"
                alt="expert3"
                fill
                className="object-contain  "
              />
            </div>
          </div>
          <Button
            value="Voir tout"
            type="primary"
            onClick={() => {}}
            className=" md:w-3/5 w-2/5 md:hidden block my-10 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Experts;
