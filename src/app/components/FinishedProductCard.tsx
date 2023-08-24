import React, { useState } from "react";
import Slider from "react-slick";
import { Image } from "./Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  productName: string;
  productImage: string;
  productDescription: string;
}

export const FinishedProductCard = ({
  productName,
  productImage,
  productDescription,
}: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleCloseClick = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className={`w-[300px] h-[500px] bg-black bg-opacity-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
        isZoomed ? "z-10 fixed inset-0 flex justify-center items-center bg-opacity-90 backdrop-blur" : ""
      }`}
    >
      <Slider {...settings}>
        <div onClick={handleZoomClick}>
          <Image urlImg={productImage} widthLogo={"big"} />
        </div>
        {/* Agrega más elementos aquí para cada tarjeta de trabajo */}
      </Slider>
      {isZoomed && (
        <div className="absolute top-0 right-0 m-2">
          <button
            className="text-white text-xl bg-gray-800 p-1 rounded"
            onClick={handleCloseClick}
          >
            X
          </button>
        </div>
      )}
      <div className={`p-5 ${isZoomed ? "hidden" : ""}`}>
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
