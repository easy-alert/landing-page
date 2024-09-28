import Image from "next/image";
import person from "@/assets/person.svg";
import mouseSlip from "@/assets/mouseSlip.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { icons } from "@/assets/icons";

export const About = () => {
  return (
    <section className="flex  justify-between relative">
      <div className="mt-28">
        <div className="flex flex-col gap-4 pl-28 w-width530 text-lightBlack">
          <h1 className="font-helveticaNeue text-title">
            Seu melhor parceiro na gestão das manutenções
          </h1>
          <p className="text-lightGray text-lg leading-7">
            Ajudamos a implantar um plano de manutenção preventiva para a
            edificação, facilitando a gestão das manutenções para o síndico.
          </p>
          <div className="py-4">
            <MainButton width="w-72">Agende uma demonstração</MainButton>
          </div>
        </div>
        <div className="absolute bottom-72 left-24">
          <Image src={mouseSlip} alt="downScroll" />
        </div>
      </div>
      <div>
        <Image src={person} alt="employee" width={955} />
        <div className="w-full flex justify-end ">
          <div className="w-full h-28 bg-lightBlack rounded-tl-xl rounded-bl-xl flex items-center pl-6">
            <OutlineButton
              borderColor="border-white"
              color="text-white"
              height="h-12"
            >
              <Image src={icons.whatsapp} alt="" width={24} /> Fale conosco
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};
