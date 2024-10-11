import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = ({ placeholder, type = "text" }: InputProps) => {
  return (
    <input
      maxLength={100}
      autoComplete="off"
      className="flex flex-1 w-full p-6 border border-inputBorder rounded-xl"
      placeholder={placeholder}
      type={type}
    />
  );
};
