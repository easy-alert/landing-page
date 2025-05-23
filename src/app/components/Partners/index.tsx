import dynamic from "next/dynamic";

import partners_1 from "@/assets/partners/partners_1.svg";
import partners_2 from "@/assets/partners/partners_2.svg";
import partners_3 from "@/assets/partners/partners_3.svg";
import partners_4 from "@/assets/partners/partners_4.svg";
import partners_5 from "@/assets/partners/partners_5.svg";
import partners_6 from "@/assets/partners/partners_6.svg";
import partners_7 from "@/assets/partners/partners_7.svg";
import partners_8 from "@/assets/partners/partners_8.svg";
import partners_9 from "@/assets/partners/partners_9.svg";
import partners_10 from "@/assets/partners/partners_10.svg";
import partners_11 from "@/assets/partners/partners_11.svg";
import partners_12 from "@/assets/partners/partners_12.svg";
import partners_13 from "@/assets/partners/partners_13.svg";
import partners_14 from "@/assets/partners/partners_14.svg";
import partners_15 from "@/assets/partners/partners_15.svg";
import partners_16 from "@/assets/partners/partners_16.svg";
import partners_17 from "@/assets/partners/partners_17.svg";
import partners_18 from "@/assets/partners/partners_18.svg";
import partners_19 from "@/assets/partners/partners_19.svg";
import partners_20 from "@/assets/partners/partners_20.svg";
import partners_21 from "@/assets/partners/partners_21.svg";
import partners_22 from "@/assets/partners/partners_22.svg";
import partners_23 from "@/assets/partners/partners_23.svg";
import partners_24 from "@/assets/partners/partners_24.svg";
import partners_25 from "@/assets/partners/partners_25.svg";

const AutoLoopCarousel = dynamic(
  () => import("@/components/Carousels/AutoLoopCarousel"),
  { ssr: false }
);

export function Partners() {
  return (
    <section className="w-full mt-14">
      <h4 className="text-caption p-5 pb-10 font-helveticaNeueMedium uppercase text-center">
        Parceiros
      </h4>

      <AutoLoopCarousel
        carouselItems={[
          partners_1,
          partners_2,
          partners_3,
          partners_4,
          partners_5,
          partners_6,
          partners_7,
          partners_8,
          partners_9,
          partners_10,
          partners_11,
          partners_12,
          partners_13,
          partners_14,
          partners_15,
          partners_16,
          partners_17,
          partners_18,
          partners_19,
          partners_20,
          partners_21,
          partners_22,
          partners_23,
          partners_24,
          partners_25,
        ]}
      />
    </section>
  );
}
