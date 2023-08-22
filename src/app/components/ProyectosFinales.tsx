import { FinishedProductCard } from "./FinishedProductCard";
import picTrabajo1 from "../../assets/picTrabajo1.jpg";
import picTrabajo2 from "../../assets/picTrabajo2.jpg";
import picTrabajo3 from "../../assets/picTrabajo3.jpg";


const ProyectosFinales = () => {

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
  ];

  return (
    <div>
      <h1>Proyectos terminados</h1>
      <ul>
        {projectData.map((item) => (
          <FinishedProductCard
          key={item.productName}
          productName={item.productName}
          productDescription={item.productDescription}
          productImage={item.productImage}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProyectosFinales;