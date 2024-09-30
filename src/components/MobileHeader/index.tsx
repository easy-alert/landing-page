import Image from "next/image";
import logo from "@/assets/easyAlertLogo.svg";
import { icons } from "@/assets/icons";

export const MobileHeader = () => {
  return (
    <header className="flex bg-headerBackground h-16 w-full justify-between items-center px-8 xl:hidden">
      <Image src={logo} alt="logo easy alert" width={148} height={33} />
      <Image src={icons.menuHamburguer} alt="menu hamburguer" height={24} />
    </header>
  );
};
