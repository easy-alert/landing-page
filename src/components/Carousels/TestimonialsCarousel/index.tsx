"use client";

import { TestimonyCard } from "@/components/Cards/TestimonyCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { useState } from "react";

export const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 2,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  const testimonyCardsInfo = [
    {
      name: "Marcelo Bavaresco",
      position: "Síndico Profissional",
      description:
        "Essa plataforma é excelente, faz lembrar a gente de fazer as manutenções preventivas (e como faz lembrar rsrs). Para mim melhorou e traz uma transparência com os moradores quanto ao acompanhamento das manutenções. Vocês estão de parabéns! principalmente ao atendimento e parceria criada!",
    },
    {
      name: "Filipe Sartor",
      position: "Morador",
      description:
        "Considero o EasyAlert essencial para estar por dentro das atividades e manutenções do condomínio, pois além do benefício de saber como estão os cuidados do local em que moro, esta é uma ótima ferramenta de comunicação entre síndico e condômino.",
    },
    {
      name: "Lavínia",
      position: "Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae urna eu finibus. Maecenas quis pellentesque risus. Praesent urna massa, ultrices vel ex et, eleifend feugiat odio. Sed eleifend lectus interdum eget.",
    },
    {
      name: "Engenheira de Manutenção",
      position: "Cargo",
      description:
        "A plataforma é muito importante pro condomínio, quanto para Construtora. Quando deixamos tudo registrado, o impacto na assistência técnica é bem considerável. A plataforma Easy Alert é de extremo valor para nós e como a Fontana, o time da Easy cuida de todos os detalhes e demonstra atenção e cuidado ao fazer a plataforma rodar junto aos condomínios, portanto, Easy Alert nota 10!",
    },
    {
      name: "Fábio Quintanilha",
      position: "Síndicos de Valor",
      description:
        "Fiquei muito impressionado com a solução da EasyAlert. Porque é muito mais que uma plataforma de gestão de manutenções prediais e permite o síndico ter total gestão das tarefas, além de gerar relatórios para acompanhamento e prestação de contas. Acabou aquela cultura de anotar as tarefas de manutenção em caderninhos ou agendas, a EasyAlert ressegnificou essas atividades e facilitou a gestão do síndico, levando mais segurança e tranquilidade para os moradores e construtoras.",
    },
  ];

  return (
    <>
      <div className="navigation-wrapper flex w-full justify-center relative xl:max-w-[70%]">
        <div ref={sliderRef} className="keen-slider">
          {testimonyCardsInfo.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide place-content-center grid p-10"
            >
              <TestimonyCard
                name={item.name}
                position={item.position}
                description={item.description}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div className="w-full py-3 justify-center items-center absolute bottom-0 hidden xl:flex">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length - 1
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "w-2 h-2 rounded-full mx-1 p-1 cursor-pointer" +
                      (currentSlide === idx
                        ? " bg-easyAlertColor"
                        : " bg-slate-300")
                    }
                  ></button>
                );
              })}
            </div>
            <div className="w-full py-3 justify-center items-center absolute bottom-0 flex xl:hidden">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "w-2 h-2 rounded-full mx-1 p-1 cursor-pointer" +
                      (currentSlide === idx
                        ? " bg-easyAlertColor"
                        : " bg-slate-300")
                    }
                  ></button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
