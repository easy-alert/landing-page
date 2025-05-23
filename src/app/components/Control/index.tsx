"use client";

import { useState } from "react";

import CustomImage from "@/components/CustomImage";
import { MainButton } from "@/components/Buttons/MainButton";
import { HabllaForm } from "@/components/HabllaForm";

import notebook from "@/assets/notebook.svg";

export const Control = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col justify-between mt-40 relative xl:flex-row">
      <article className="flex flex-col justify-center items-center w-width551 px-4 xl:pl-28">
        <div className="flex flex-col gap-3 mb-8 max-w-lg">
          <h4 className="uppercase text-caption font-helveticaNeueMedium text-lightBlack">
            Simplifique e Organize
          </h4>
          <h2 className="text-title font-helveticaNeue">
            Controle eficiente de manutenções
          </h2>
          <p className="text-lightGray text-sectionParagraph">
            Tenha uma gestão visual do Plano de Manutenções, através do nosso
            Kanban e calendário de manutenções. Simplifique a organização e
            mantenha tudo sob controle.
          </p>
        </div>
        <div className="hidden xl:flex">
          <MainButton onClick={() => setIsModalOpen(true)}>
            Agende uma demonstração
          </MainButton>
        </div>
      </article>

      <article className="flex justify-end mt-16 ">
        <CustomImage
          src={notebook}
          className="relative z-20"
          alt="Software da Easy Alert"
          style={{ width: "100%", height: "auto" }}
        />
      </article>

      <div className="flex justify-center px-4 xl:hidden">
        <MainButton responsiveWidth="w-full">
          Agende uma demonstração
        </MainButton>
      </div>

      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </section>
  );
};
