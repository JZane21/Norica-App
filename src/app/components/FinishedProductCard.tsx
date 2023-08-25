import React, { useState } from "react";
import { Image } from "./Image";


interface Props {
  productName: string;
  productImage: string;
  productDescription: string;
  isZoomed: boolean;
  onZoomToggle: () => void;
}

export const FinishedProductCard = ({
  productName,
  productImage,
  productDescription,
  isZoomed,
  onZoomToggle,
}: Props) => {

  const handleCloseClick = () => {
    onZoomToggle();
  };
  return (
    <div onClick={onZoomToggle}
      className={`w-[303px] h-[450px] bg-black bg-opacity-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900
       `}
    >
        <div>
          <Image urlImg={productImage} widthLogo={"big"} />
        </div>
      
      <div className={`p-5`}>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">
            {productName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
          {productDescription}
        </p>
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </div>
    </div>
  );
};
