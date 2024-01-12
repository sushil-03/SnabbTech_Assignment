"use client";
import React from "react";
import Button from "../Button";
import { footer } from "../../constant";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Union from "../../public/svg/Union";

const Footer = () => {
  return (
    <div className="font-jost md:my-10 my-2 flex md:gap-10 gap-5 flex-col ">
      <div className="md:w-4/5 w-full mx-auto">
        <p className=" md:text-3xl sm:text-2xl text-xl gap-1  text-center font-medium  leading-snug  mt-20 mb-6">
          &quot; Rejoignez notre communauté et aidez-nous à construire la
          première plateforme de networking en ligne à destination du marché
          africain!&quot;
        </p>
        <div className="flex flex-row  justify-center gap-8 my-20">
          <Button value="Se connecter" type="primary" onClick={() => {}} />
          <Button value="Créer un compte" type="primary" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-row justify-between lg:mx-12 md:mx-6 mx-0 flex-wrap">
        {footer.map((item, key) => (
          <div key={key}>
            <p className="font-semibold uppercase font-biz my-4">
              {item.heading}
            </p>
            <ul className="list-disc font-light flex gap-4 flex-col list-inside">
              {item.content.map((value, index) => (
                <div key={index}>
                  <li className=" font-jost">{value}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex justify-between items-center gap-6">
          <div className="text-3xl leading-loose tracking-widest">
            {" "}
            <span className="flex font-kyivType items-center">
              P
              <p className="w-6 h-6 border-2 border-black  flex items-center justify-center rounded-t-full text-active">
                <Union color="#A95454" height={12} width={12} />
              </p>
              NDA
            </span>
          </div>
          <p className="md:block hidden">© 2022 Tous droits réservés</p>
          <div className="flex gap-5 items-center">
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
            <FaTwitter size={20} />
          </div>
        </div>
        <p className="md:hidden block">© 2022 Tous droits réservés</p>
      </div>
    </div>
  );
};

export default Footer;
