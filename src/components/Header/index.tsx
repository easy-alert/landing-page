import Image from "next/image";
import easyAlertLogo from "@/assets/easyAlertLogo.svg";
import Link from "next/link";
import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import { icons } from "@/assets/icons";

export const Header = () => {
  return (
    <header className="flex h-32 bg-headerBackground items-center justify-between gap-20 px-28">
      <Image src={easyAlertLogo} alt="logo" />

      <nav className="text-easyAlertColor">
        <ul className="flex space-x-8">
          {["Sobre", "Funcionalidades", "Depoimentos", "Normas", "Planos"].map(
            (item) => (
              <li key={item} className="transition-transform hover:scale-105">
                <Link href="#">{item}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="flex gap-5">
        <MainButton width="w-64">Agende uma demonstração</MainButton>
        <OutlineButton width="w-32">
          <Image src={icons.user} alt="" /> Login
        </OutlineButton>
      </div>
    </header>
  );
};
