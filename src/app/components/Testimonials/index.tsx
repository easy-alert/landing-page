import Image from "next/image";

import { VideoCard } from "@/components/Cards/VideoCard";
import { TestimonialsCarousel } from "@/components/Carousels/TestimonialsCarousel";

import cross10Detail from "../../../assets/details/10CrossDetail.svg";
import cross8Detail from "../../../assets/details/lawTopRightDetail.svg";
import cross3Detail from "../../../assets/details/3CrossDetail.svg";

export const Testimonials = () => {
  return (
    <section id="Depoimentos">
      <div className="flex flex-col gap-16 mt-32 items-center">
        <h4 className="text-caption font-helveticaNeueMedium uppercase text-center">
          Depoimentos
        </h4>

        <div className="flex relative w-full justify-center">
          <Image
            src={cross10Detail}
            alt=""
            className="absolute top-0 left-0 hidden xl:flex"
          />
          <Image
            src={cross8Detail}
            alt=""
            className="absolute top-96 right-0 hidden xl:flex"
          />
          <Image
            src={cross3Detail}
            alt=""
            className="absolute -bottom-20 left-0 hidden xl:flex"
          />

          <div className="flex flex-col gap-16">
            <VideoCard
              videoId="lI6M36t9pJg"
              title="Jackson"
              position="Construfase"
              description="A plataforma trouxe uma mudança de cultura, tornando as manutenções preventivas mais eficazes e o condomínio sempre em dia."
            />

            <VideoCard
              videoId="72p71wycHac"
              title="Tiago"
              position="Constate"
              description="A implementação da plataforma alerta proprietários para a importância da manutenção preventiva, reduzindo custos e prolongando a vida útil dos empreendimentos."
              videoRight
            />

            <VideoCard
              videoId="OMBar4BqLRU"
              title="Ana Paula"
              position="Mindset"
              description="A plataforma facilitou nosso trabalho, tornando a manutenção transparente para os moradores e liberando nossa equipe para outras atividades essenciais."
            />
          </div>
        </div>
        <TestimonialsCarousel />
      </div>
    </section>
  );
};
