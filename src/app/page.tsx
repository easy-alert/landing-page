import Image from "next/image";
import { About } from "./components/About";
import partners from "@/assets/partners.svg";
import { Plans } from "./components/Plans";
import { Control } from "./components/Control";
import { InfoReceivable } from "./components/InfoReceivable";

const App = () => {
  return (
    <>
      <About />
      <section className="w-full mt-14">
        <Image src={partners} alt="" layout="responsive" />
      </section>
      <Plans />
      <Control />
      <InfoReceivable />
    </>
  );
};

export default App;
