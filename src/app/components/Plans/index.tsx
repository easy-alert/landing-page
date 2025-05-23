"use client";

import { useState } from "react";

import { icons } from "@/assets/icons";
import detail from "@/assets/details/detail.svg";

import { MainButton } from "@/components/Buttons/MainButton";
import { IInfoCard, InfoCard } from "@/components/Cards/InfoCard";
import { HabllaForm } from "@/components/HabllaForm";
import CustomImage from "@/components/CustomImage";

export const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardInfo: IInfoCard[] = [
    {
      icon: icons.house,
      title: "Sistema de Cobertura",
      topics: [
        "Efetuar limpeza das calhas e descidas pluviais;",
        "Efetuar inspeção nas telhas e amarrações do sistema de cobertura;",
        "Efetuar manutenção nas vedações das fixações.",
      ],
      alt: "Sistema de Cobertura",
    },
    {
      icon: icons.water,
      title: "Manutenção Sistema Hidráulico",
      topics: [
        "Efetuar troca da boia mecânica;",
        "Efetuar inspeção e manutenção das bombas de recalque;",
        "Efetuar limpeza dos reservatórios.",
      ],
      alt: "Manutenção Sistema Hidráulico",
    },
    {
      icon: icons.paintBrush,
      title: "Sistema de fachada",
      topics: [
        "Efetuar limpeza e repintura da fachada;",
        "Efetuar manutenção das vedações das esquadrias externas;",
        "Efetuar inspeção e manutenção na fachada de ACM.",
      ],
      alt: "Sistema de fachada",
    },
  ];

  return (
    <section
      id="Funcionalidades"
      className="flex flex-col-reverse px-4 items-center xl:flex-row xl:px-28 xl:items-start gap-24 mt-36 relative"
    >
      <div className="flex gap-6">
        <div className="hidden xl:flex flex-col gap-5">
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-gray-300 rounded-sm"></div>
            <div className="w-1 h-12 bg-gray-300"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-1 h-20 bg-red-500"></div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500 rounded-sm"></div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            {cardInfo.map(({ icon, title, topics, alt }) => (
              <InfoCard
                key={title}
                icon={icon}
                title={title}
                topics={topics}
                alt={alt}
              />
            ))}
          </div>

          <div>
            <div className="flex justify-center mt-10 xl:hidden">
              <MainButton responsiveWidth="w-full">
                Agende uma demonstração
              </MainButton>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center max-w-width530 xl:items-start">
        <div className="flex flex-col gap-3 items-center mb-8 max-w-lg xl:items-start">
          <p className="font-helveticaNeueMedium text-caption uppercase">
            Padronizações e Agilidade
          </p>

          <h2 className="font-helveticaNeue text-title text-lightBlack">
            Plano de manutenção personalizado
          </h2>

          <p className="text-lightGray leading-7 text-lg">
            Aproveite nossa base de manutenções, desenvolvida conforme a NBR
            5674:2012 (Manutenção de Edificações - Procedimento), e adapte-a às
            necessidades do seu condomínio, adicionando suas próprias
            manutenções personalizadas.
          </p>
        </div>

        <div className="hidden xl:flex">
          <MainButton onClick={() => setIsModalOpen(true)}>
            Agende uma demonstração
          </MainButton>
        </div>
      </div>

      <div className="hidden absolute bottom-0 right-0 lg:flex">
        <CustomImage src={detail} alt="Detalhe" />
      </div>

      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </section>
  );
};
