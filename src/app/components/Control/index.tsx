import { MainButton } from "@/components/Buttons/MainButton";
import notebook from "@/assets/notebook.svg";
import details2 from "@/assets/details2.svg";
import details3 from "@/assets/details3.svg";
import Image from "next/image";

export const Control = () => {
  return (
    <section className="flex justify-between mt-40 relative">
      <article className="flex flex-col justify-center w-width551 pl-28">
        <div className="flex flex-col gap-3 mb-8">
          <h4 className="uppercase text-caption font-helveticaNeueMedium">
            Simplifique e Organize
          </h4>
          <h2 className="text-title font-helveticaNeue">
            Controle eficiente de manutenções
          </h2>
          <p className="text-lightGray leading-7 text-lg max-w-lg">
            Tenha uma gestão visual do Plano de Manutenções, através do nosso
            Kanban e calendário de manutenções. Simplifique a organização e
            mantenha tudo sob controle.
          </p>
        </div>
        <div>
          <MainButton>Agende uma demonstração</MainButton>
        </div>
      </article>
      <article className="mt-16">
        <Image className="relative z-20" src={notebook} alt="" />
      </article>
      <Image
        className="absolute z-10 top-0 right-right476"
        src={details2}
        alt=""
      />
      <Image
        className="absolute z-10 top-20 right-right548"
        src={details3}
        alt=""
      />
    </section>
  );
};
