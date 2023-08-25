import { FinishedProductCard } from "../components/FinishedProductCard";
import picTrabajo1 from "../../assets/picTrabajo1.jpg";
import picTrabajo2 from "../../assets/picTrabajo2.jpg";
import picTrabajo3 from "../../assets/picTrabajo3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";


export const TrabajosPage = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const handleZoomToggle = (index: number) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };
  const projectData = [
    {
      productName: 'Proyecto 1',
      productDescription: 'Descripción del proyecto 1.',
      productImage: picTrabajo1
    },
    {
      productName: 'Proyecto 2',
      productDescription: 'Descripción del proyecto 2.',
      productImage: picTrabajo2
    },
    {
      productName: 'Proyecto 3',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 4',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 5',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 6',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 7',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 8',
      productDescription: 'Descripción del proyecto 3',
      productImage: picTrabajo3
    },
  ];
  return (
    <div className = "h-full w-full">
      <h2>Proyectos terminados</h2>
      
      <Slider {...settings}>
        
        {projectData.map((item, index) => (
          <div
        >
          <FinishedProductCard
          key={item.productName}
          productName={item.productName}
          productDescription={item.productDescription}
          productImage={item.productImage}
          isZoomed={zoomedIndex === index}
          onZoomToggle={() => handleZoomToggle(index)}
          />
          </div>
        ))}
      </Slider>
      {zoomedIndex !== null && (
        <div className="z-10 fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 backdrop-blur" onClick={() => setZoomedIndex(null)}>
          <img
            className="w-[700px] h-[800px]"
            src={projectData[zoomedIndex].productImage}
          />
          <a href="#">
          <h5 className="mb-0 text-2xl font-bold tracking-tight text-white dark:text-gray-900">
            {projectData[zoomedIndex].productName}
          </h5>
        </a>
        <div> <p className="mb-7 font-normal text-gray-400 dark:text-gray-700">
          {projectData[zoomedIndex].productDescription}
        </p></div>
        
        </div>
      )}
    </div>
  );
};

export default TrabajosPage;