import awards_1 from "@/assets/suporters/awards_1.svg";
import awards_2 from "@/assets/suporters/awards_2.svg";
import awards_3 from "@/assets/suporters/awards_3.svg";
import awards_4 from "@/assets/suporters/awards_4.svg";
import awards_5 from "@/assets/suporters/awards_5.svg";
import awards_6 from "@/assets/suporters/awards_6.svg";
import awards_7 from "@/assets/suporters/awards_7.svg";
import dynamic from "next/dynamic";

const AutoLoopCarousel = dynamic(
  () => import("@/components/Carousels/AutoLoopCarousel"),
  { ssr: false }
);

export function Awards() {
  return (
    <section className="w-full mt-14">
      <h4 className="text-caption p-5 pb-10 font-helveticaNeueMedium uppercase text-center">
        apoiadores prêmios e investidores
      </h4>

      <AutoLoopCarousel
        carouselItems={[
          awards_1,
          awards_2,
          awards_3,
          awards_4,
          awards_5,
          awards_6,
          awards_7,
        ]}
      />
    </section>
  );
}
