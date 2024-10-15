import {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  register: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Input = ({
  placeholder,
  type = "text",
  error,
  register,
  onChange,
}: InputProps) => {
  return (
    <>
      <input
        {...register}
        onChange={onChange}
        maxLength={100}
        autoComplete="off"
        className="flex flex-1 w-full p-6 border border-inputBorder rounded-xl"
        placeholder={placeholder}
        type={type}
      />
      {error && (
        <p className="-mt-4 flex w-full items-start text-xs text-red-500">
          {error}
        </p>
      )}
    </>
  );
};
