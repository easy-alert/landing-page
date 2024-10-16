import { About } from "./components/About";
import ah from "@/assets/partners/ah.svg";
import bairroDaJuventude from "@/assets/partners/bairroDaJuventude.svg";
import fontana from "@/assets/partners/fontana.svg";
import providencia from "@/assets/partners/providenciaLogo.svg";
import acate from "@/assets/suporters/acate.png";
import acif from "@/assets/suporters/acif.png";
import brde from "@/assets/suporters/brde.png";
import programaK from "@/assets/suporters/programaK.png";
import { Plans } from "./components/Plans";
import { Control } from "./components/Control";
import { InfoReceivable } from "./components/InfoReceivable";
import { Law } from "./components/Law";
import { PlatformEasy } from "./components/PlatformEasy";
import { OperationMap } from "./components/OperationMap";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { OurPlans } from "./components/OurPlans";
import { Footer } from "./components/Footer";
import AutoLoopCarousel from "@/components/Carousels/AutoLoopCarousel";
// import { PlatformEasy } from "./components/PlatformEasy";

const App = () => {
  return (
    <>
      <About />
      <section className="w-full mt-14">
        <h4 className="text-caption p-5 pb-10 font-helveticaNeueMedium uppercase text-center">
          Parceiros
        </h4>
        <AutoLoopCarousel
          carouselItems={[ah, bairroDaJuventude, fontana, providencia]}
        />
      </section>
      <Plans />
      <Control />
      <InfoReceivable />
      <OperationMap />
      <PlatformEasy />
      <Law />
      <section className="w-full mt-14">
        <h4 className="text-caption p-5 pb-10 font-helveticaNeueMedium uppercase text-center">
          apoiadores prêmios e investidores
        </h4>
        <AutoLoopCarousel carouselItems={[acate, acif, brde, programaK]} />
      </section>
      <Testimonials />
      <Contact />
      <OurPlans />
      <Footer />
    </>
  );
};

export default App;
