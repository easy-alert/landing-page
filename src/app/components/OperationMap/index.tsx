"use client";

import Image from "next/image";
import { MainButton } from "@/components/Buttons/MainButton";
import mapResponsive from "@/assets/mapResponsive.svg";
import operationMap from "@/assets/onlyOperationMap.svg";
import leftDetail from "@/assets/details/leftDetail.svg";
import rightDetail from "@/assets/details/rightDetail.svg";
import { useState } from "react";
import { HabllaForm } from "@/components/HabllaForm";

export const OperationMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex justify-center gap-20 xl:px-28 xl:pt-16 mt-56 relative">
      <Image
        src={leftDetail}
        alt=""
        className="absolute top-0 left-0 hidden xl:flex"
      />
      <Image
        src={rightDetail}
        alt=""
        className="absolute bottom-0 right-0 hidden xl:flex"
      />
      <div className="w-width647 flex xl:flex-1 items-center justify-center gap-44">
        <Image src={operationMap} alt="" className="hidden xl:flex" />
        <article className="flex flex-col items-center gap-8 max-w-lg px-4 xl:max-w-width530 xl:items-start">
          <div className="flex flex-col gap-3">
            <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
              Sempre presente
            </h4>
            <h2 className="text-title text-lightBlack ">
              {"Para Todos e \nem Todo Lugar"}
            </h2>
            <p className="text-lightGray text-sectionParagraph max-w-lg">
              Nossa missão é facilitar o dia a dia dos síndicos, oferecendo uma
              gestão das manutenções simples e ágil.
            </p>
          </div>
          <div className="hidden xl:flex">
            <MainButton onClick={() => setIsModalOpen(true)}>
              Agende uma demonstração
            </MainButton>
          </div>
          <div className="flex flex-col gap-6 xl:hidden">
            <div>
              <Image src={mapResponsive} alt="" />
            </div>
            <div>
              <MainButton responsiveWidth="w-full">
                Agende uma demonstração
              </MainButton>
            </div>
          </div>
        </article>
      </div>
      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </section>
  );
};
