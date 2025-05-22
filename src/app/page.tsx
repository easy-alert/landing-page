import dynamic from "next/dynamic";

import { About } from "./components/About";

const Partners = dynamic(
  () => import("./components/Partners").then((mod) => mod.Partners),
  { ssr: false }
);
const Plans = dynamic(
  () => import("./components/Plans").then((mod) => mod.Plans),
  { ssr: false }
);
const Control = dynamic(
  () => import("./components/Control").then((mod) => mod.Control),
  { ssr: false }
);
const InfoReceivable = dynamic(
  () => import("./components/InfoReceivable").then((mod) => mod.InfoReceivable),
  { ssr: false }
);
const OperationMap = dynamic(
  () => import("./components/OperationMap").then((mod) => mod.OperationMap),
  { ssr: false }
);
const PlatformEasy = dynamic(
  () => import("./components/PlatformEasy").then((mod) => mod.PlatformEasy),
  { ssr: false }
);
const Law = dynamic(() => import("./components/Law").then((mod) => mod.Law), {
  ssr: false,
});
const Awards = dynamic(
  () => import("./components/Awards").then((mod) => mod.Awards),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("./components/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false }
);
const Contact = dynamic(
  () => import("./components/Contact").then((mod) => mod.Contact),
  { ssr: false }
);

const App = () => {
  return (
    <>
      {/* Conteúdo da página */}
      <About />
      <Partners />
      <Plans />
      <Control />
      <InfoReceivable />
      <OperationMap />
      <PlatformEasy />
      <Law />
      <Awards />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
