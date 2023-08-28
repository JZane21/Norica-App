import { FinishedProductCard } from "../components/FinishedProductCard";
import picTrabajo1 from "../../assets/picTrabajo1.jpg";
import picTrabajo2 from "../../assets/picTrabajo2.jpg";
import picTrabajo3 from "../../assets/picTrabajo3.jpg";
import picTrabajo4 from "../../assets/picTrabajo4.jpg";
import picTrabajo5 from "../../assets/picTrabajo5.jpg";
import picTrabajo6 from "../../assets/picTrabajo6.jpg";
import picTrabajo7 from "../../assets/picTrabajo7.jpg";
import SimpleSlider from "../components/SimpleSlider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";


export const TrabajosPage = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  
  const handleZoomToggle = (index: number) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };
  const projectData = [
    {
      productName: 'Proyecto Fundación Alalay',
      productDescription1: 'Construcción para fundación Alalay Huajchilla diseñada para una capacidad de 24 niños con todos los requerimientos, materiales duraderos de primera Duración: 5 meses y medio (2019)',
      productImage: picTrabajo1,
      productDescription2:'5 meses y medio (2019)'
    },
    {
      productName: 'Edificio Lomas de Achumani',
      productDescription1: 'Edificio ubicado en la calle 21 de junio Lomas de Achumani. Terreno 550 metros 6 niveles 9 departamentos 2 locales comerciales cuenta con parques y bauleras, material de primera. Duración: 8 meses y medio (2017)',
      productImage: picTrabajo2,
      productDescription2:' 8 meses y medio (2017)'
    },
    {
      productName: 'Condominio Cipreses',
      productDescription1: 'Condominios cipreses de 16 casas (casa modelo) 3 niveles, 3 dormitorios en suit y todas las comodidades  Ubicado en la calle 11 de alto irpavi. Duración: Actualmente construyendo (2023)',
      productImage: picTrabajo3,
      productDescription2:' Actualmente construyendo (2023)'
    },
    {
      productName: 'Casa Serranías Club Golf',
      productDescription1: 'Casa unifamiliar de 3 niveles ubicado en Serranías del Golf Mallasilla, material de primera. Duración: 4 meses y medio (2018)',
      productImage: picTrabajo4,
      productDescription2:'4 meses y medio (2018)'
    },
    {
      productName: 'Casa Obrajes',
      productDescription1: 'Casa unifamiliar 4 niveles, 4 dormitorios en suit con todas las comodidades, material de primera y obra fina de lujo. Ubicada en la calle 5 de obrajes. Duración: 7 meses (2021)',
      productImage: picTrabajo5,
      productDescription2:' Duración: 7 meses (2021)'

    },
    {
      productName: 'Departamentos Meseta de Achumani',
      productDescription1: 'Construcción de 3 niveles de departamentos multi familiares. Ubicado en la meseta de Achumani. Duración: 5 meses (2018)',
      productImage: picTrabajo6,
      productDescription2:'Duración: 5 meses (2018)'
    },
 
  ];
  return (
    <div className = "h-full w-full">
      <h2>Proyectos terminados</h2>
      
    <SimpleSlider>
        {projectData.map((item, index) => (
          <FinishedProductCard
            key={item.productName}
            productName={item.productName}
            productDescription1={item.productDescription1}
            productDescription2={item.productDescription2}
            productImage={item.productImage}
            isZoomed={zoomedIndex === index}
            onZoomToggle={() => handleZoomToggle(index)}
          />
        ))}
      </SimpleSlider>
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
          {projectData[zoomedIndex].productDescription1}
        </p></div>
        
        </div>
      )}
    </div>
  );
};

export default TrabajosPage;