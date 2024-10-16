"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MainButton } from "../Buttons/MainButton";
import { Input } from "./Input";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { mask } from "@/app/utils";
import Spinner from "../Spinner";
import { baseURL, formApi } from "@/app/api/postForm/pipedriveApi";

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [onQuery, setOnQuery] = useState(false);

  const schema = z.object({
    name: z.string().min(1, { message: "Campo obrigatório." }),
    email: z
      .string()
      .email("Informe um email válido.")
      .min(1, { message: "Campo obrigatório." }),
    phone: z.string().min(14, { message: "Informe um telefone válido." }),
    companyName: z.string().min(1, { message: "Campo obrigatório." }),
    message: z.string().min(1, { message: "Campo obrigatório." }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function postForm(data: FormData) {
    setOnQuery(true);

    await formApi
      .post(baseURL, data)
      .then(() => {
        setIsSubmitted(true);
        reset();
      })
      .finally(() => {
        setOnQuery(false);
      });
  }

  return (
    <>
      {!isSubmitted ? (
        <form
          className="flex flex-col w-full gap-6 items-center"
          onSubmit={handleSubmit(postForm)}
        >
          <div className="flex flex-col gap-6 max-w-[60%] w-full max-sm:max-w-[100%] px-6">
            <Input
              register={register("name")}
              placeholder="Nome"
              error={errors.name?.message}
            />
            <Input
              register={register("email")}
              placeholder="Email"
              error={errors.email?.message}
            />
            <Input
              register={register("phone")}
              placeholder="Telefone"
              error={errors.phone?.message}
              onChange={(e) => {
                const maskedValue = mask({
                  type: "TEL",
                  value: e.target.value,
                });
                setValue("phone", maskedValue);
              }}
            />
            <Input
              register={register("companyName")}
              placeholder="Empresa"
              error={errors.companyName?.message}
            />
            <textarea
              {...register("message")}
              maxLength={600}
              className="p-6 w-full border border-inputBorder rounded-xl h-[350px] resize-none"
              placeholder="Digite sua mensagem"
            />
          </div>
          <MainButton disabled={onQuery} type="submit" onClick={() => {}}>
            {onQuery ? <Spinner /> : "Enviar mensagem"}
          </MainButton>
        </form>
      ) : (
        <div className="grid h-[500px] place-content-center px-10 text-center">
          <h3 className="text-4xl font-bold text-primary">
            Em breve nossos especialistas entrarão em contato.
          </h3>
        </div>
      )}
    </>
  );
};
