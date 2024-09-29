import Image from "next/image";
import phone from "@/assets/phone.svg";
import { MainButton } from "@/components/Buttons/MainButton";

export const InfoReceivable = () => {
  return (
    <section className="flex mt-56 justify-between">
      <Image src={phone} alt="" />
      <article className="flex flex-col gap-8 w-width530 mr-52">
        <div className="flex flex-col gap-3">
          <h4 className="text-caption font-helveticaNeueMedium uppercase text-lightBlack">
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
        <div>
          <MainButton>Agende uma demonstração</MainButton>
        </div>
      </article>
    </section>
  );
};
