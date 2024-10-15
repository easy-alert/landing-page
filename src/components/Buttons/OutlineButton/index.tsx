"use client";

import { IButton } from "../type";

export const OutlineButton = ({
  children,
  width,
  borderColor = "border-darkGray",
  color = "text-darkGray",
  height = "h-14",
  onClick = () =>
    window.open(
      "https://api.whatsapp.com/send?phone=5548991680913&text=Olá,%20quero%20saber%20mais%20sobre%20a%20Easy%20Alert",
      "_blank"
    ),
}: IButton) => {
  return (
    <button
      className={`${width} ${borderColor} ${color} ${height} px-6 rounded-md bg-transparent flex border-2 gap-2 transition-transform hover:scale-105 items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
