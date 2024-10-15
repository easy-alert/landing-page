import { Form } from "@/components/Form";

export const Contact = () => {
  return (
    <section id="contato">
      <div className="flex flex-col gap-16 mt-60">
        <h4 className="text-caption p-5 font-helveticaNeueMedium uppercase text-center">
          Central de Contato
        </h4>
        <Form />
      </div>
    </section>
  );
};
