"use client";

import { useState } from "react";

import CustomImage from "@/components/CustomImage";
import { MainButton } from "@/components/Buttons/MainButton";
import { LawCard } from "@/components/Cards/LawCard";
import { HabllaForm } from "@/components/HabllaForm";

import leftDetail from "@/assets/details/lawTopLeftDetail.svg";
import rightDetail from "@/assets/details/lawTopRightDetail.svg";
import bottomRightDetail from "@/assets/details/lawBottomRightDetail.svg";
import abntImage from "@/assets/abntImage.svg";

export const Law = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section
      id="Normas"
      className="flex flex-col pt-56 pb-14 mt-14 gap-8 items-center justify-center relative xl:flex-row"
    >
      <CustomImage
        src={leftDetail}
        alt="Detalhe esquerdo"
        className="absolute top-0 left-0 hidden xl:flex"
      />
      <CustomImage
        src={rightDetail}
        alt="Detalhe direito"
        className="absolute top-0 right-0 hidden xl:flex"
      />
      <CustomImage
        src={bottomRightDetail}
        alt="Detalhe inferior direito"
        className="absolute bottom-0 right-0 hidden xl:flex"
      />

      <article className="flex flex-col items-center gap-8 px-4 max-w-lg xl:max-w-width530 xl:items-start">
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
            Adapte às Suas Necessidades
          </h4>
          <h2 className="text-title text-lightBlack ">
            Normas brasileiras para condomínios e edificações
          </h2>
          <p className="text-lightGray text-sectionParagraph">
            Utilize nossa base de manutenções conforme a NBR 5674:2012
            (Manutenção de Edificações - Procedimento) para garantir a
            conformidade com as normas brasileiras. Personalize-a adicionando
            suas próprias manutenções, atendendo às necessidades específicas do
            seu condomínio de forma prática e eficiente.
          </p>
        </div>
        <div className="hidden xl:flex">
          <MainButton onClick={() => setIsModalOpen(true)}>
            Agende uma demonstração
          </MainButton>
        </div>
      </article>
      <div className="flex flex-col gap-6 relative">
        <CustomImage
          src={abntImage}
          alt="Simbolo da ABNT"
          className="absolute -top-10 -right-5 xl:flex hidden"
        />

        <LawCard
          title="NBR 5.674"
          description="Norma Brasileira quanto as manutenções preventivas em edificações, retratando a periodicidade, atividade e responsabilidades de execução."
        />

        <LawCard
          title="NBR 17.170"
          description="Norma Brasileira quanto aos prazos de garantias dos equipamentos e elementos da edificação."
        />
      </div>

      <div className="flex xl:hidden w-full px-16 mt-4">
        <MainButton responsiveWidth="w-full">
          Agende uma demonstração
        </MainButton>
      </div>

      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </section>
  );
};
