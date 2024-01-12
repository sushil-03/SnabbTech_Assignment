import React from "react";
import { missions } from "../../constant";

const Mission = () => {
  return (
    <div className="font-jost md:my-24 my-16 flex gap-10 flex-col ">
      <p className="md:text-5xl sm:text-4xl text-3xl font-medium">
        Missions de PANDA
      </p>
      <div className="flex gap-2 md:my-4 my-2 justify-between lg:flex-nowrap flex-wrap">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="md:p-6 p-3 border border-active rounded-t-full flex items-center flex-col md:gap-4 gap-2  sm:w-60 w-48 gap-y-2"
          >
            <p>{index < 9 ? `0${index + 1}` : index + 1}</p>
            <p className="md:text-3xl text-xl font-medium">{mission.heading}</p>
            <p className="text-center md:text-base text-sm">
              {mission.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
