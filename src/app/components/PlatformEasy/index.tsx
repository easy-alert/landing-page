import { MainButton } from "@/components/Buttons/MainButton";

export const PlatformEasy = () => {
  return (
    <div className="flex justify-end items-center px-40 relative bg-easyAlertColor bg-right bg-no-repeat xl:bg-phoneWithQrCode h-height500 mt-44">
      <div className="flex flex-col gap-5 text-white w-width501">
        <h2 className="text-title">Todos por dentro</h2>
        <p className="leading-7">
          O acompanhamento das manutenções, acesso à documentos, contatos dos
          colaboradores e abertura de chamado pode ser realizado pelos
          moradores, através de um QR-Code gerado diretamente pela plataforma e
          disponibilizado em áreas comuns da edificação.
        </p>
        <div>
          <MainButton bgColor="bg-white" color="text-[#343434]">
            Conheça a plataforma Easy Alert
          </MainButton>
        </div>
      </div>
    </div>
  );
};
