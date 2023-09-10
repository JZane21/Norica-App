import { useMemo } from "react";
import { Link } from "react-router-dom";

interface Props {
  setZoomedIndex: (param: number | null) => void;
}

export const WorksPageButtonSection = ({ setZoomedIndex }: Props) => {
  const styleButton = (normal: string, hover: string, active: string) => {
    return `w-[150px] h-[45px] text-white ${normal} hover:${hover}
    active:${active} text-base font-thin p-2 pl-3 pr-3 rounded-xl m-5 ml-11`;
  };

  let buttonOneStyle: string = useMemo(
    () => styleButton("bg-red-600", "bg-black-500", "bg-gray-700"),
    [setZoomedIndex]
  );
  let buttonTwoStyle: string = useMemo(
    () => styleButton("bg-gray-600", "bg-red-700", "bg-red-700"),
    [setZoomedIndex]
  );

  return (
    <div
      className=" -mt-12 w-[50%] "
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <button className={buttonOneStyle} onClick={() => setZoomedIndex(null)}>
        Volver
      </button>
      <Link className="w-max h-max ml-3 mr-3" to={`/app/home/contratanos`}>
        <button className={buttonTwoStyle}>Contratanos</button>
      </Link>
    </div>
  );
};
