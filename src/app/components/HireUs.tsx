import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  width: number;
}

function HireUs({ width }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      .buttonStyle{
        font-size: 16px;
        font-weight: 100;
        height: max-content;
        padding: 14px 30px 14px 30px;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
      }
    `}</style>
      <section
        className={`text-white bg-transparent bg-slate-400
        ${width >= 467 && "mr-5"}
        flex flex-col items-center`}
      >
        <p className="mb-3 font-thin">Contrata nuestros servicios</p>
        <button
          onClick={() => navigate("")}
          className="buttonStyle bg-primary-600 hover:bg-primary-500
          active:bg-primary-700 text-center"
        >
          Contrátanos
        </button>
      </section>
    </>
  );
}

export default HireUs;
