"use client";

import Image from "next/image";
import LogoFooter from "../../../assets/logoFooter.svg";
import Instagram from "../../../assets/instagram.svg";
import Facebook from "../../../assets/facebook.svg";
import YoutubeFilled from "../../../assets/youtubeFilled.svg";
import ArrowUp from "../../../assets/arrowUp.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      id="Rodape"
      className="flex flex-col bg-easyAlertColor py-8 px-10 mt-28 gap-6 xl:h-[475px]"
    >
      <div className="flex flex-col gap-6 justify-between xl:items-center xl:flex-row">
        <Image src={LogoFooter} alt="EasyAlert logo" className="self-center" />
        <hr className="bg-white flex flex-1 opacity-20 xl:hidden" />
        <MainButton bgColor="bg-white" color="text-easyAlertColor font-bold">
          Agende uma demonstração
        </MainButton>
      </div>
      <hr className="bg-white opacity-20 hidden xl:flex" />
      <div className="flex flex-1 flex-col-reverse gap-6 xl:flex-row">
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-5">
            <h6 className="text-white">Endereço</h6>
            <address className="not-italic text-white opacity-60">
              Criciuma - SC
            </address>
          </div>
          <p className="text-white opacity-60">&#169; 2023 — Copyright</p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h6 className="text-white">Info</h6>
          <div className="flex flex-col gap-1">
            <p className="text-white opacity-60">Sobre</p>
            <p className="text-white opacity-60">Funcionalidades</p>
            <p className="text-white opacity-60">Depoimentos</p>
            <p className="text-white opacity-60">Normas</p>
            <p className="text-white opacity-60">Planos</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-5 relative">
          <h6 className="text-white">Contato</h6>
          <div className="flex flex-col gap-1">
            <p className="text-white opacity-60">(48) 99168-0913</p>
            <p className="text-white opacity-60">contato@easyalert.com.br</p>
          </div>
          <div className="flex gap-2 items-center xl:absolute xl:top-0 xl:right-0">
            <button className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105">
              <Image src={Instagram} alt="Ir para Instagram" />
            </button>
            <button className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105">
              <Image src={Facebook} alt="Ir para Facebook" />
            </button>
            <button className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105">
              <Image src={YoutubeFilled} alt="Ir para Youtube" />
            </button>
          </div>
        </div>
      </div>
      {scrollPosition !== 0 ? (
        <button
          onClick={goToTop}
          className="h-12 w-12 bg-white flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105 fixed bottom-12 right-10"
        >
          <Image src={ArrowUp} alt="Ir para topo da página" />
        </button>
      ) : null}
    </footer>
  );
};
