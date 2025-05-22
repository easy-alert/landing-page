import CustomImage from "@/components/CustomImage";

import { MainButton } from "@/components/Buttons/MainButton";

import phoneQRCodeResponsive from "../../../assets/phoneQRCodeResponsive.svg";

export const PlatformEasy = () => {
  return (
    <div className="flex justify-end items-center relative bg-right bg-no-repeat xl:bg-phoneWithQrCode h-height500 mt-44">
      <div className="flex flex-col flex-1 gap-5 text-white items-center px-6 pt-6 max-w-lg bg-easyAlertColor rounded-tl-3xl xl:mr-40 xl:items-start">
        <h4 className="uppercase text-caption text-white font-helveticaNeueMedium text-lightBlack">
          Sempre presente
        </h4>

        <h2 className="text-title">Todos por dentro</h2>

        <p className="leading-7">
          O acompanhamento das manutenções, acesso à documentos, contatos dos
          colaboradores e abertura de chamado pode ser realizado pelos
          moradores, através de um QR-Code gerado diretamente pela plataforma e
          disponibilizado em áreas comuns da edificação.
        </p>

        <div>
          <MainButton bgColor="bg-white" color="text-easyAlertColor font-bold">
            Conheça a plataforma Easy Alert
          </MainButton>
        </div>

        <CustomImage
          src={phoneQRCodeResponsive}
          alt="Celular com o aplicativo EasyAlert"
          className="flex xl:hidden"
        />
      </div>
    </div>
  );
};
