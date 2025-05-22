"use client";

import { useState } from "react";

import Link from "next/link";

import logo from "@/assets/easyAlertLogo.svg";
import { icons } from "@/assets/icons";

import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import CustomImage from "../CustomImage";

const headerNavItems = [
  { name: "Sobre", href: "/#Sobre" },
  { name: "Funcionalidades", href: "/#Funcionalidades" },
  { name: "Depoimentos", href: "/#Depoimentos" },
  { name: "Normas", href: "/#Normas" },
  {
    name: "Politica de Privacidade",
    href: "/politica-de-privacidade-de-dados",
  },
];

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-headerBackground w-full justify-between items-center px-4 py-3 xl:hidden">
      <CustomImage src={logo} alt="Easy Alert logo" />

      <button onClick={handleMenuClick} className="p-3 cursor-pointer">
        <CustomImage
          src={isOpen ? icons.x : icons.menuHamburguer}
          alt={isOpen ? "Fechar menu" : "Menu hamburguer"}
          height={32}
          width={32}
        />
      </button>

      {isOpen && (
        <nav className="fixed inset-0 bg-[#f9f9f9] z-50 flex flex-col items-center justify-center space-y-8  transition-opacity duration-300 ease-in-out shadow-lg">
          <CustomImage src={logo} alt="Easy Alert logo" />

          <button
            onClick={handleMenuClick}
            className="absolute top-0 right-6 p-3 cursor-pointer"
          >
            <CustomImage
              src={icons.x}
              alt="Fechar menu"
              height={32}
              width={32}
            />
          </button>

          <div className=" max-w-xs flex flex-col items-center space-y-4">
            <OutlineButton
              width="w-full"
              onClick={() => {
                window.open("https://company.easyalert.com.br/login", "_blank");
                setIsOpen(false);
              }}
            >
              <CustomImage src={icons.user} alt="Login" /> Login
            </OutlineButton>

            <MainButton>Agende uma demonstração</MainButton>
          </div>

          <ul className="w-full max-w-xs space-y-4 text-lg f text-center">
            {headerNavItems.map((item) => (
              <li
                key={item.name}
                className="py-4 border-b hover:bg-gray-100 rounded-lg transition cursor-pointer text-easyAlertColor"
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
