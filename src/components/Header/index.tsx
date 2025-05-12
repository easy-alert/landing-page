"use client";

import Image from "next/image";
import easyAlertLogo from "@/assets/easyAlertLogo.svg";
import Link from "next/link";
import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import { icons } from "@/assets/icons";
import { useState } from "react";
import { HabllaForm } from "../HabllaForm";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="hidden h-32 bg-headerBackground items-center justify-between gap-20  xl:flex lg:gap-6 lg:px-28">
      <Image src={easyAlertLogo} alt="logo" />

      <nav className="text-easyAlertColor">
        <ul className="flex space-x-8">
          {["Sobre", "Funcionalidades", "Depoimentos", "Normas"].map((item) => (
            <li key={item} className="transition-transform hover:scale-105">
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5">
        <MainButton width="w-64" onClick={() => setIsModalOpen(true)}>
          Agende uma demonstração
        </MainButton>
        <OutlineButton
          width="w-32"
          onClick={() =>
            window.open("https://company.easyalert.com.br/login", "_blank")
          }
        >
          <Image src={icons.user} alt="" /> Login
        </OutlineButton>
      </div>
      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </header>
  );
};
