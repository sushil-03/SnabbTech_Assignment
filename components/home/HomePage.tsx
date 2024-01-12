import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className=" font-jost z-50 ">
      <div>
        <p className="md:text-5xl sm:text-4xl text-3xl text-center  md:w-3/5 sm:w-4/5 w-11/12 mx-auto leading-snug  font-medium text-black">
          Nous réunissons experts du monde entier et organisations en Afrique
        </p>
      </div>
      <div className=" flex-row  gap-20 min-h-min items-end   relative py-10 my-4 lg:flex hidden">
        <div className="  w-1/2 pb-10 sm:opacity-20 ">
          <p className=" text-3xl font-medium text-active pb-2 ">
            Organisations en Afrique
          </p>
          <div className="text-black ">
            <p>
              Vous êtes une entreprise privée ou publique basée en Afrique et
              vous avez du mal à recruter des profils expérimentés? Vous êtes
              une start-up africaine et vous souhaitez faire appel aux services
              d'un prestataire externe? Vous recherchez une expertise spécifique
              pour réaliser un futur projet?
            </p>
            <br />
            <p>
              Grâce à son réseau, PANDA vous aide à trouver les experts dont
              vous avez besoin!
            </p>
          </div>
        </div>
        <div className="w-2/3 relative  self-baseline  h-[30rem]">
          <div className="relative w-full h-full">
            <Image
              src="/images/background1.png"
              alt="background1"
              width={700}
              height={700}
              className="  absolute -left-14 -top-6 z-10"
            />
            <Image
              src="/images/background2.png"
              alt="background1"
              width={700}
              height={700}
              className="absolute object-contain z-50 right-0"
            />
          </div>
        </div>

        <div className="w-1/2 pb-10 sm:opacity-20">
          <p className=" text-3xl font-medium text-active pb-2">Experts</p>
          <div className="text-black">
            <p>
              Vous êtes un professionnel expérimenté et vous planifiez de partir
              travailler en Afrique? Vous vous rendez souvent sur le continent
              africain pour des raisons professionnelles et vous souhaitez
              étendre votre réseau? Vous souhaitez partager votre expertise avec
              des organisations africaines sans vous déplacer?
            </p>
            <br />
            <p>
              PANDA est la plateforme de networking des experts pour la
              réalisation de leurs projets professionnels sur le continent
              africain!
            </p>
          </div>
        </div>
      </div>
      <div className="   py-10 my-4 lg:hidden ">
        <div className="w-5/6 relative  self-baseline  h-[20rem] mx-auto ">
          <div className="relative w-full h-full">
            <div></div>
            <Image
              src="/images/company.png"
              alt="background1"
              fill
              className="absolute object-contain z-50 right-0"
            />
            <div className=" -left-14 -top-6 z-10">
              <Image
                src="/images/background1.png"
                alt="background1"
                fill
                className=" "
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-row snap-x sm:gap-10 gap-4  overflow-x-scroll">
          <div className="  pb-10 sm:opacity-20 ">
            <p className=" md:text-3xl text-xl font-medium text-active pb-2 ">
              Organisations en Afrique
            </p>
            <div className="text-black md:text-base text-sm">
              <p>
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous souhaitez faire appel aux
                services d'un prestataire externe? Vous recherchez une expertise
                spécifique pour réaliser un futur projet?
              </p>
              <br />
              <p>
                Grâce à son réseau, PANDA vous aide à trouver les experts dont
                vous avez besoin!
              </p>
            </div>
          </div>
          <div className=" pb-10 sm:opacity-20">
            <p className=" md:text-3xl text-xl font-medium text-active pb-6">
              Experts
            </p>
            <div className="text-black md:text-base text-sm">
              <p>
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
              </p>
              <br />
              <p>
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
