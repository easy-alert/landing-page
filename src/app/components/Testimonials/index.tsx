import { VideoCard } from "@/components/Cards/VideoCard";
import cross10Detail from "../../../assets/details/10CrossDetail.svg";
import cross8Detail from "../../../assets/details/lawTopRightDetail.svg";
import cross3Detail from "../../../assets/details/3CrossDetail.svg";
import Image from "next/image";
import { TestimonialsCarousel } from "@/components/Carousels/TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <section id="depoimentos">
      <div className="flex flex-col gap-16  items-center">
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
              title="Nome da pessoa no depoimento"
              position="Síndico"
              description="Resumo do vídeo"
            />

            <VideoCard
              title="Nome da pessoa no depoimento"
              position="Síndico"
              description="Resumo do vídeo"
              videoRight
            />

            <VideoCard
              title="Nome da pessoa no depoimento"
              position="Síndico"
              description="Resumo do vídeo"
            />
          </div>
        </div>
        {/* <TestimonialsCarousel /> */}
      </div>
    </section>
  );
};
