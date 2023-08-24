import React from "react";
import { FinishedProductCard } from "../components/FinishedProductCard";
import picTrabajo1 from "../../assets/picTrabajo1.jpg";
import picTrabajo2 from "../../assets/picTrabajo2.jpg";
import picTrabajo3 from "../../assets/picTrabajo3.jpg";

export const TrabajosPage = () => {
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
      productDescription: 'Descripción del proyecto 4',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 5',
      productDescription: 'Descripción del proyecto 5',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 6',
      productDescription: 'Descripción del proyecto 6',
      productImage: picTrabajo3
    },
    {
      productName: 'Proyecto 7',
      productDescription: 'Descripción del proyecto 7',
      productImage: picTrabajo3
    },
    // Agrega más proyectos aquí
  ];

  
  return (
    <div className="h-full w-full">
      <h1>Proyectos terminados</h1>
      <div className="flex flex-row">
        {projectData.map((item, index) => (
          <FinishedProductCard
            key={index}
            productName={item.productName}
            productDescription={item.productDescription}
            productImage={item.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default TrabajosPage;