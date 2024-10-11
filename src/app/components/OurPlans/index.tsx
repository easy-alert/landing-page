import { MainButton } from "@/components/Buttons/MainButton";
import { PlanCard } from "@/components/Cards/PlanCard";

export const OurPlans = () => {
  return (
    <section className="flex flex-col mt-40 px-4 items-center justify-center xl:flex-row">
      <div className="flex flex-col w-full justify-center items-center gap-10 xl:flex-row">
        <article className="flex flex-col gap-8 xl:max-w-width530 items-center xl:items-start">
          <div className="flex flex-col gap-3">
            <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
              Acessíveis para toda obra
            </h4>
            <h2 className="text-title text-lightBlack">Nossos Planos</h2>
            <p className="text-lightGray text-sectionParagraph">
              Praticidade e comodidade que cabem no seu orçamento.
            </p>
          </div>
          <div className="hidden xl:flex">
            <MainButton>Agende uma demonstração</MainButton>
          </div>
        </article>
        <div className="grid grid-rows-4 grid-cols-1 self-center max-w-96 gap-6 xl:grid-rows-2 xl:grid-cols-2 xl:max-w-full">
          <PlanCard title="1 a 3 obras" price="R$99,90/mês" />
          <PlanCard title="1 a 3 obras" price="R$99,90/mês" />
          <PlanCard title="1 a 3 obras" price="R$99,90/mês" />
          <PlanCard title="1 a 3 obras" price="R$99,90/mês" />
        </div>
        <div className="flex xl:hidden w-full justify-center px-16 mt-4">
          <MainButton responsiveWidth="w-full max-w-96 ">
            Agende uma demonstração
          </MainButton>
        </div>
      </div>
    </section>
  );
};
