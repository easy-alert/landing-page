import Image from "next/image";
import phone from "@/assets/phone.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import phoneResponsive from "@/assets/phoneResponsive.svg";

export const InfoReceivable = () => {
  return (
    <section className="flex justify-center gap-20 px-4 mt-56 xl:justify-between">
      <div className="hidden w-width647 xl:flex">
        <Image src={phone} alt="" className="relative z-20" />
      </div>
      <article className="flex flex-col items-center mr= gap-8 xl:max-w-width530 xl:mr-52 xl:items-start">
        <div className="flex flex-col gap-3">
          <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
            Tudo por WhatsApp
          </h4>
          <h2 className="text-title text-lightBlack ">
            Receba informações completas de manutenções no seu celular.
          </h2>
          <p className="text-lightGray text-sectionParagraph max-w-lg">
            Tenha uma gestão visual do Plano de Manutenções, através do nosso
            Kanban e calendário de manutenções. Simplifique a organização e
            mantenha tudo sob controle.
          </p>
        </div>
        <div className="hidden xl:flex">
          <MainButton>Agende uma demonstração</MainButton>
        </div>
        <div className="flex flex-col gap-6 xl:hidden">
          <div>
            <Image src={phoneResponsive} alt="" />
          </div>
          <div>
            <MainButton responsiveWidth="w-full">
              Agende uma demonstração
            </MainButton>
          </div>
        </div>
      </article>
    </section>
  );
};
