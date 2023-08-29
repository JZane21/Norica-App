interface Props {
  action: () => void;
  textButton: string;
  normalBg: string;
  hoverBg: string;
  activeBg: string;
  textColor: string;
  typeButton: string;
}

export const ButtonHireForm = ({
  action,
  textButton,
  normalBg,
  hoverBg,
  activeBg,
  textColor,
  typeButton,
}: Props) => {
  const type =
    typeButton === "button"
      ? "button"
      : typeButton === "reset"
      ? "reset"
      : "submit";
  return (
    <button
      type={type}
      onClick={action}
      className={`w-32 h-12 m-3 ${normalBg}
    ${hoverBg} ${activeBg} rounded-lg shadow justify-center items-center
    flex ${textColor} text-base font-semibold m-2 shadow-lg`}
    >
      {textButton}
    </button>
  );
};
