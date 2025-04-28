"use client";

import { IButton } from "../type";

export const MainButton = ({
  children,
  bgColor = "bg-easyAlertColor",
  width,
  responsiveWidth,
  color = "text-white",
  type,
  ...rest
}: IButton) => {
  const isSubmitType = type === "submit";

  const handleOnClick = () => {
    if (isSubmitType) return;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16933724240/mNcwCN6CxqsaENDA0Io_",
      });
    }

    window.open(
      "https://wa.me/5548991537724?text=Oi%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o",
      "_blank"
    );
  };

  return (
    <button
      className={`${bgColor} ${color} ${responsiveWidth} xl:${width} h-14 px-6 rounded-md hover:shadow-2xl transition-transform hover:scale-105`}
      type={type}
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </button>
  );
};
