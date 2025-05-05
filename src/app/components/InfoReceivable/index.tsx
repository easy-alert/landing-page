"use client";

import Image from "next/image";
import phone from "@/assets/phone.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import phoneResponsive from "@/assets/phoneResponsive.svg";
import { HabllaForm } from "@/components/HabllaForm";
import { useState } from "react";

export const InfoReceivable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex justify-center gap-32 mt-56 items-start xl:justify-start">
      <div className="hidden xl:flex">
        <Image src={phone} alt="" className="" />
      </div>
      <article className="flex flex-col gap-8 items-center px-4 xl:max-w-width530 xl:items-start">
        <div className="flex flex-col gap-3 max-w-lg">
          <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
            Tudo por WhatsApp
          </h4>
          <h2 className="text-title text-lightBlack ">
            Receba informações completas de manutenções no seu celular.
          </h2>
          <p className="text-lightGray text-sectionParagraph max-w-lg">
            Tenha uma gestão visual do Plano de Manutenções, através do nosso
            Kanban e calendário de manutenções. Simplifique a organização e
            mantenha tudo sob controle.
          </p>
        </div>
        <div className="hidden xl:flex">
          <MainButton onClick={() => setIsModalOpen(true)}>Agende uma demonstração</MainButton>
        </div>
        <div className="flex flex-col gap-6 xl:hidden">
          <div>
            <Image src={phoneResponsive} alt="" />
          </div>
          <div>
            <MainButton responsiveWidth="w-full">
              Agende uma demonstração
            </MainButton>
          </div>
        </div>
      </article>
      {isModalOpen && <HabllaForm />}
    </section>
  );
};
