import { MainButton } from "../Buttons/MainButton";
import { Input } from "./Input";

export const Form = () => {
  return (
    <form className="flex flex-col w-full gap-6 items-center">
      <div className="flex flex-col gap-6 max-w-[60%] w-full max-sm:max-w-[100%] px-6">
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Telefone" />
        <Input placeholder="Empresa" />
        <textarea
          maxLength={600}
          className="p-6 w-full border border-inputBorder rounded-xl h-[350px] resize-none"
          placeholder="Digite sua mensagem"
        />
      </div>
      <MainButton>Enviar mensagem</MainButton>
    </form>
  );
};
