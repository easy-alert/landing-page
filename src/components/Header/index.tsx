"use client";

import { useState } from "react";

import Link from "next/link";

import { navItems } from '@/utils/navItems';

import { icons } from "@/assets/icons";
import easyAlertLogo from "@/assets/easyAlertLogo.svg";

import { HabllaForm } from "../HabllaForm";
import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import CustomImage from "../CustomImage";


export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="hidden h-32 bg-headerBackground items-center justify-between gap-20  xl:flex lg:gap-6 lg:px-28">
      <Link href="/">
        <CustomImage src={easyAlertLogo} alt="Easy Alert logo" />
      </Link>

      <nav className="text-easyAlertColor">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="transition-transform hover:scale-105"
            >
              <Link href={item.href}>{item.name}</Link>
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
          <CustomImage src={icons.user} alt="Login" /> Login
        </OutlineButton>
      </div>

      {isModalOpen && <HabllaForm onClose={closeModal} />}
    </header>
  );
};
