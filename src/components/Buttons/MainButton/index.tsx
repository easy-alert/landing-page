import { IButton } from "../type";

export const MainButton = ({
  children,
  bgColor = "bg-easyAlertColor",
  width,
  ...rest
}: IButton) => {
  return (
    <button
      className={`${bgColor} ${width} h-14 text-white px-6 rounded-md hover:shadow-2xl transition-transform hover:scale-105 `}
      {...rest}
    >
      {children}
    </button>
  );
};
