"use client";

import { useKeenSlider } from "keen-slider/react";

import { StaticImageData } from "next/image";

import CustomImage from "@/components/CustomImage";

interface AutoLoopCarouselProps {
  carouselItems: string[] | StaticImageData[];
}

const animation = { duration: 15000, easing: (t: number) => t };

export default function AutoLoopCarousel({
  carouselItems,
}: AutoLoopCarouselProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    mode: "free",
    slides: {
      perView: 3,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 1,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },

    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },

    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide place-content-center grid"
        >
          <CustomImage
            src={item}
            alt={`Foto do carrossel ${index}`}
            style={{ height: "100px", width: "auto", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}
