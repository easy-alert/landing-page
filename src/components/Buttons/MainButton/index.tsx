"use client";

import { IButton } from "../type";

export const MainButton = ({
  children,
  bgColor = "bg-easyAlertColor",
  width,
  responsiveWidth,
  color = "text-white",
  ...rest
}: IButton) => {
  // Função que lida com o clique no botão
  const handleOnClick = () => {
    // Dispara a conversão (verificando se window.gtag existe)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16933724240/mNcwCN6CxqsaENDA0Io_",
      });
    } else {
      console.warn("Gtag ainda não está disponível.");
    }

    // Em seguida, abre o link do WhatsApp em outra aba
    window.open(
      "https://wa.me/5548991537724?text=Oi%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o",
      "_blank"
    );
  };

  return (
    <button
      className={`${bgColor} ${color} ${responsiveWidth} xl:${width} h-14 px-6 rounded-md hover:shadow-2xl transition-transform hover:scale-105 `}
      {...rest}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
