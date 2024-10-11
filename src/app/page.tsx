import Image from "next/image";
import { About } from "./components/About";
import partners from "@/assets/partners.svg";
import { Plans } from "./components/Plans";
import { Control } from "./components/Control";
import { InfoReceivable } from "./components/InfoReceivable";
import { Law } from "./components/Law";
import { PlatformEasy } from "./components/PlatformEasy";
import { OperationMap } from "./components/OperationMap";
import { Testimonials } from "./components/Testimonials";
// import { PlatformEasy } from "./components/PlatformEasy";

const App = () => {
  return (
    <>
      <About />
      <section className="hidden w-full mt-14">
        <Image src={partners} alt="" layout="responsive" />
      </section>
      <Plans />
      <Control />
      <InfoReceivable />
      <OperationMap />
      <PlatformEasy />
      <Law />
      <Testimonials />
    </>
  );
};

export default App;
