import { IButton } from "../type";

export const MainButton = ({
  children,
  bgColor = "bg-easyAlertColor",
  width,
  responsiveWidth,
  color,
  ...rest
}: IButton) => {
  return (
    <button
      className={`${bgColor} ${color} ${responsiveWidth} xl:${width} h-14 text-white px-6 rounded-md hover:shadow-2xl transition-transform hover:scale-105 `}
      {...rest}
    >
      {children}
    </button>
  );
};
