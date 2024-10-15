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
      name: "Nome da Pessoa",
      position: "Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae urna eu finibus. Maecenas quis pellentesque risus. Praesent urna massa, ultrices vel ex et, eleifend feugiat odio. Sed eleifend lectus interdum eget.",
    },
    {
      name: "Nome da Pessoa",
      position: "Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae urna eu finibus. Maecenas quis pellentesque risus. Praesent urna massa, ultrices vel ex et, eleifend feugiat odio. Sed eleifend lectus interdum eget.",
    },
    {
      name: "Nome da Pessoa",
      position: "Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae urna eu finibus. Maecenas quis pellentesque risus. Praesent urna massa, ultrices vel ex et, eleifend feugiat odio. Sed eleifend lectus interdum eget.",
    },
    {
      name: "Nome da Pessoa",
      position: "Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae urna eu finibus. Maecenas quis pellentesque risus. Praesent urna massa, ultrices vel ex et, eleifend feugiat odio. Sed eleifend lectus interdum eget.",
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
