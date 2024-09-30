import Image from "next/image";
import { About } from "./components/About";
import partners from "@/assets/partners.svg";
import { Plans } from "./components/Plans";
import { Control } from "./components/Control";
import { InfoReceivable } from "./components/InfoReceivable";
import { Law } from "./components/Law";
import { PlatformEasy } from "./components/PlatformEasy";
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
      <PlatformEasy />
      <Law />
    </>
  );
};

export default App;
