"use client";
import React from "react";
import { companies } from "../../constant";
import Image from "next/image";
import Button from "../Button";
const Company = () => {
  const handleClick = () => {};
  return (
    <div className="font-jost my-10 flex gap-10 flex-col h-full">
      <div className="flex items-center gap-4 h-full lg:flex-row flex-col">
        <div className=" lg:w-3/5 w-full flex justify-between flex-col  lg:h-96 h-48 ">
          <div className="md:text-5xl sm:text-4xl text-3xl gap-1  font-medium flex md:flex-col sm:flex-row flex-col">
            <span>Offres</span>
            <span>d'emploi</span>
          </div>

          <div className="flex gap-10 flex-col">
            <p className="lg:w-3/4 w-full sm:text-base text-sm mt-2">
              Publiez les offres d'emploi au sein de votre organisation auprès
              de notre communauté d'experts! Expert à la recherche d'un emploi
              en Afrique? Trouvez le job de vos rêves!
            </p>
            <Button
              value="Publier ou postuler à une offre d'emploi"
              type="primary"
              onClick={handleClick}
              className="lg:block hidden"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-x-2 gap-y-6  gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="md:p-4 p-3 border-2 border-light-gray lg:rounded-[5rem] rounded-[3rem] flex lg:gap-8 md:gap-5 gap-3 flex-col items-center 2xl:w-[400px] xl:w-[350px] lg:w-[300px]  w-[250px]"
            >
              <div className="flex items-center flex-col">
                <p className="md:text-2xl sm:text-xl text-lg  font-medium">
                  {company.heading}
                </p>
                <p className="text-active sm:text-base text-sm">Madagascar</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-active">Full-time</p>
                  <p className="underline cursor-pointer">+ Favorite</p>
                </div>
                <div className=" flex-col items-center gap-2 lg:flex hidden">
                  <div className=" relative h-14 w-14">
                    <Image
                      src={`/images/${company.image}`}
                      alt="logo"
                      fill
                      className="rounded-full overflow-hidden object-contain"
                    />
                  </div>
                  <p className="font-semibold w-32 text-center  text-sm">
                    {company.miniHeading}
                  </p>
                </div>
                <p>1 day ago</p>
              </div>
              <div>
                <Button value="Voir" type="primary" onClick={handleClick} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
