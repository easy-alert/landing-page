import { IButton } from "../type";

export const OutlineButton = ({
  children,
  width,
  borderColor = "border-darkGray",
  color = "text-darkGray",
  height = "h-14",
}: IButton) => {
  return (
    <button
      className={`${width} ${borderColor} ${color} ${height} px-6 rounded-md bg-transparent flex border-2 gap-2 transition-transform hover:scale-105 items-center`}
    >
      {children}
    </button>
  );
};
