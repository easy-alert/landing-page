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
      "https://wa.me/5548991537724?text=Oi%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o",
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
