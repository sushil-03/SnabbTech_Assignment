import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <div className="font-jost my-10 flex gap-10 flex-col ">
      <p className="md:text-5xl sm:text-4xl text-3xl gap-1  font-medium ">
        Les fondateurs
      </p>
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div className="flex lg:gap-12 md:gap-8 sm:gap-6 gap-2">
          <div className="relative  lg:w-80 w-48 ">
            <Image
              src="/images/person1.png"
              alt="founder1"
              layout="responsive"
              height={20}
              width={20}
              className="rounded-t-full"
            />

            <p className="mt-2 ">Co-fondateur PANDA: </p>
            <p className="text-active">Sarah Walu Onya</p>
          </div>
          <div className="relative lg:w-80 w-48">
            <Image
              src="/images/person2.png"
              alt="founder1"
              layout="responsive"
              height={20}
              width={20}
              className="rounded-t-full"
            />

            <p className="mt-2">Co-fondateur PANDA: </p>
            <p className="text-active"> Abdoulaye Ba</p>
          </div>
        </div>
        <div className=" w-[340px] border border-light-gray rounded-t-full px-12 pt-20 pb-6 text-sm ">
          <p>
            " <span className="text-active">Sarah</span> et{" "}
            <span className="text-active">Abdoulaye </span> sont tous deux
            consultants et managers dans un groupe international de conseil en
            stratégie et management. Ils se sont rencontrés au Luxembourg et ont
            beaucoup échangé sur leur expérience commune dans l'entrepreneuriat.
            Tout au long de leurs discussions, une chose très claire est vite
            apparue : leur passion pour l'entrepreneuriat et leur amour de
            l'Afrique, le continent dont ils sont tous deux originaires. “
          </p>
          <br />
          <br />
          <p>
            Ils sont alors convaincus qu'ils peuvent répondre à un besoin
            critique en Afrique et avoir un réel impact en réunissant des
            experts de premier plan du monde entier pour collaborer avec des
            acteurs africains sur des projets visant à faire croître
            l'écosystème de l'innovation en{" "}
            <span className="text-active"> Afrique</span>.
          </p>
        </div>
      </div>
      <div className="lg:w-4/5 w-full mx-auto">
        <p className=" md:text-3xl sm:text-2xl text-xl text-center font-medium  leading-snug  mt-20 mb-6">
          “ Notre objectif est de capturer et partager les connaissances, les
          expertises et les réseaux afin de créer des opportunités illimitées,
          que ce soit pour les acteurs africains à la recherche des meilleures
          talents pour développer leurs activités ou pour les experts du monde
          entier qui souhaitent lancer des projets innovants en Afrique. “
        </p>
        <p className="text-active text-end">Sarah et Abdoulaye</p>
      </div>
    </div>
  );
};

export default Founder;
