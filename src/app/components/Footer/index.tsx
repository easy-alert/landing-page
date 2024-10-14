import Image from "next/image";
import LogoFooter from "../../../assets/logoFooter.svg";
import { MainButton } from "@/components/Buttons/MainButton";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-easyAlertColor py-8 px-10 mt-28 gap-6">
      <div className="flex flex-1 justify-between">
        <Image src={LogoFooter} alt="EasyAlert logo" />
        <MainButton bgColor="bg-white" color="text-easyAlertColor font-bold">
          Agende uma demonstração
        </MainButton>
      </div>
      <hr className="bg-white opacity-20" />
    </footer>
  );
};
