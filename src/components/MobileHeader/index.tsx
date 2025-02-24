"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/easyAlertLogo.svg";
import { icons } from "@/assets/icons";
import Link from "next/link";
import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-headerBackground w-full justify-between items-center px-4 py-3 xl:hidden">
      <Image src={logo} alt="logo easy alert" />

      <button onClick={handleMenuClick} className="p-3 cursor-pointer">
        <Image
          src={isOpen ? icons.x : icons.menuHamburguer}
          alt={isOpen ? "fechar menu" : "menu hamburguer"}
          height={32}
          width={32}
        />
      </button>

      {isOpen && (
        <nav className="fixed inset-0 bg-[#f9f9f9] z-50 flex flex-col items-center justify-center space-y-8  transition-opacity duration-300 ease-in-out shadow-lg">
          <Image src={logo} alt="logo easy alert" />
          <button
            onClick={handleMenuClick}
            className="absolute top-0 right-6 p-3 cursor-pointer"
          >
            <Image src={icons.x} alt="fechar menu" height={32} width={32} />
          </button>

          <div className=" max-w-xs flex flex-col items-center space-y-4">
            <OutlineButton
              width="w-full"
              onClick={() => {
                window.open("https://company.easyalert.com.br/login", "_blank");
                setIsOpen(false);
              }}
            >
              <Image src={icons.user} alt="" /> Login
            </OutlineButton>

            <MainButton>Agende uma demonstração</MainButton>
          </div>

          <ul className="w-full max-w-xs space-y-4 text-lg f text-center">
            {["Sobre", "Funcionalidades", "Depoimentos", "Normas"].map(
              (item) => (
                <li
                  key={item}
                  className="py-4 border-b hover:bg-gray-100 rounded-lg transition cursor-pointer text-easyAlertColor"
                >
                  <Link href={`#${item}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};
