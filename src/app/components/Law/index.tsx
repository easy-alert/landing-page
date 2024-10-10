import { MainButton } from "@/components/Buttons/MainButton";
import { LawCard } from "@/components/Cards/LawCard";
import Image from "next/image";
import leftDetail from "@/assets/details/lawTopLeftDetail.svg";
import rightDetail from "@/assets/details/lawTopRightDetail.svg";
import bottomRightDetail from "@/assets/details/lawBottomRightDetail.svg";
import abntImage from "@/assets/abntImage.svg";

export const Law = () => {
  return (
    <section className="flex flex-col pt-56 pb-14 mt-14 gap-8 items-center relative xl:flex-row">
      <Image src={leftDetail} alt="" className="absolute top-0 left-0" />
      <Image src={rightDetail} alt="" className="absolute top-0 right-0" />
      <Image
        src={bottomRightDetail}
        alt=""
        className="absolute bottom-0 right-0"
      />
      <article className="flex flex-col items-center gap-8 px-28 xl:max-w-width530 xl:items-start">
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
            Adapte às Suas Necessidades
          </h4>
          <h2 className="text-title text-lightBlack ">
            Normas brasileiras para condomínios e edificações
          </h2>
          <p className="text-lightGray text-sectionParagraph">
            Utilize nossa base de manutenções conforme a NBR 5674:2012
            (Manutenção de Edificações - Procedimento) para garantir a
            conformidade com as normas brasileiras. Personalize-a adicionando
            suas próprias manutenções, atendendo às necessidades específicas do
            seu condomínio de forma prática e eficiente.
          </p>
        </div>
        <div className="hidden xl:flex">
          <MainButton>Agende uma demonstração</MainButton>
        </div>
      </article>
      <div className="flex flex-col gap-6 relative">
        <Image
          src={abntImage}
          alt=""
          className="absolute -top-10 -right-5 xl:flex hidden"
        />
        <LawCard
          title="NBR 5.674"
          description="Norma Brasileira quanto as manutenções preventivas em edificações, retratando a periodicidade, atividade e responsabilidades de execução."
        />
        <div>
          <LawCard
            title="NBR 17.170"
            description="Norma Brasileira quanto aos prazos de garantias dos equipamentos e elementos da edificação."
          />
        </div>
      </div>
      <div className="flex xl:hidden w-full px-16 mt-4">
        <MainButton responsiveWidth="w-full">
          Agende uma demonstração
        </MainButton>
      </div>
    </section>
  );
};
