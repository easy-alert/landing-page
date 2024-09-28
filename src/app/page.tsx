import Image from "next/image";
import { About } from "./components/About";
import partners from "@/assets/partners.svg";
import { Plans } from "./components/Plans";
import { Control } from "./components/Control";

const App = () => {
  return (
    <>
      <About />
      <section className="w-full mt-14">
        <Image src={partners} alt="" layout="responsive" />
      </section>
      <Plans />
      <Control />
    </>
  );
};

export default App;
