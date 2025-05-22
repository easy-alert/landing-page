"use client";

import { useState } from "react";

import CustomImage from "@/components/CustomImage";
import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { HabllaForm } from "@/components/HabllaForm";

import { icons } from "@/assets/icons";
import person from "@/assets/person.svg";
import mouseSlip from "@/assets/mouseSlip.svg";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="Sobre" className="flex justify-between relative">
      <div className="mt-28 flex justify-center w-full xl:w-auto">
        <div>
          <div className="flex px-4 flex-col gap-4 xl:pl-28 max-w-width530 text-lightBlack">
            <h1 className="font-helveticaNeue text-title">
              Seu melhor parceiro na gestão das manutenções
            </h1>
            <p className="hidden text-lightGray text-lg leading-7 xl:flex">
              Ajudamos a implantar um plano de manutenção preventiva para a
              edificação, facilitando a gestão das manutenções para o síndico.
            </p>
            <p className="text-lightGray text-lg leading-7 xl:hidden">
              Com a Easy Alert, lembramos delas por você. Chegamos para
              descomplicar a forma de controlar as manuteções preventivas,
              criando experiência mais fácil e agradável na hora de cuidar do
              dia a dia da edificação.
            </p>
            <div className="py-4">
              <MainButton
                responsiveWidth="w-full"
                width="w-72"
                onClick={() => setIsModalOpen(true)}
              >
                Agende uma demonstração
              </MainButton>
            </div>
          </div>

          <div className="hidden pl-28 mt-20 xl:flex">
            <CustomImage
              src={mouseSlip}
              alt="Role o mouse para baixo"
              priority
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      
      <div>
        <CustomImage
          src={person}
          alt="Pessoa engenheira"
          className="hidden xl:flex"
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <div className="w-full hidden justify-end  xl:flex">
          <div className="w-full h-28 bg-lightBlack rounded-tl-xl rounded-bl-xl flex items-center pl-6">
            <OutlineButton
              borderColor="border-white"
              color="text-white"
              height="h-12"
              onClick={() => setIsModalOpen(true)}
            >
              <CustomImage
                src={icons.whatsapp}
                alt="Ícone do WhatsApp"
                priority
                width={24}
                height={24}
              />
              Fale conosco
            </OutlineButton>
          </div>
        </div>
      </div>

      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </section>
  );
};
