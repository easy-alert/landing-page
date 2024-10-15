"use client";

import { IButton } from "../type";

export const MainButton = ({
  children,
  bgColor = "bg-easyAlertColor",
  width,
  responsiveWidth,
  color = "text-white",
  onClick = () =>
    window.open(
      "https://api.whatsapp.com/send?phone=5548991680913&text=Olá,%20quero%20saber%20mais%20sobre%20a%20Easy%20Alert",
      "_blank"
    ),
  ...rest
}: IButton) => {
  return (
    <button
      className={`${bgColor} ${color} ${responsiveWidth} xl:${width} h-14 px-6 rounded-md hover:shadow-2xl transition-transform hover:scale-105 `}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
