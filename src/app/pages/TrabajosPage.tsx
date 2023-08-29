import { FinishedProductCard } from "../components/FinishedProductCard";
import picTrabajo1 from "../../assets/picTrabajo1.jpg";
import picTrabajo2 from "../../assets/picTrabajo2.jpg";
import picTrabajo3 from "../../assets/picTrabajo3.jpg";
import picTrabajo4 from "../../assets/picTrabajo4.jpg";
import picTrabajo5 from "../../assets/picTrabajo5.jpg";
import picTrabajo6 from "../../assets/picTrabajo6.jpg";
import SimpleSlider from "../components/SimpleSlider"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { useState } from "react";


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
      productDescription1: "Construcción para fundación Alalay Huajchilla diseñada para una capacidad de 24 niños con todos los requerimientos, materiales duraderos de primera Duración: 5 meses y medio (2019)",
      productImage: picTrabajo1,
      productDescription2:'5 meses y medio (2019)'
    },
    {
      productName: 'Edificio Lomas de Achumani',
      productDescription1: "Edificio ubicado en la calle 21 de junio Lomas de Achumani. Terreno 550 metros 6 niveles 9 departamentos 2 locales comerciales cuenta con parques y bauleras, material de primera. Duración: 8 meses y medio (2017)",
      productImage: picTrabajo2,
      productDescription2:' 8 meses y medio (2017)'
    },
    {
      productName: 'Condominio Cipreses',
      productDescription1: "Condominios cipreses de 16 casas (casa modelo) 3 niveles, 3 dormitorios en suit y todas las comodidades  Ubicado en la calle 11 de alto irpavi. Duración: Actualmente construyendo (2023)",
      productImage: picTrabajo3,
      productDescription2:' Actualmente construyendo (2023)'
    },
    {
      productName: 'Casa Serranías Club Golf',
      productDescription1: "Casa unifamiliar de 3 niveles ubicado en Serranías del Golf Mallasilla, material de primera. Duración: 4 meses y medio (2018)",
      productImage: picTrabajo4,
      productDescription2:'4 meses y medio (2018)'
    },
    {
      productName: 'Casa Obrajes',
      productDescription1: "Casa unifamiliar 4 niveles, 4 dormitorios en suit con todas las comodidades, material de primera y obra fina de lujo. Ubicada en la calle 5 de obrajes. Duración: 7 meses (2021)",
      productImage: picTrabajo5,
      productDescription2:' Duración: 7 meses (2021)'

    },
    {
      productName: 'Departamentos Meseta de Achumani',
      productDescription1: "Construcción de 3 niveles de departamentos multi familiares. Ubicado en la meseta de Achumani. Duración: 5 meses (2018)",
      productImage: picTrabajo6,
      productDescription2:'Duración: 5 meses (2018)'
    },
 
  ];
  return (
    <div className = " p-4 h-full w-full bg-white rounded-3xl">
      <h2 className="p-5 text-5xl font-bold -mb-20 text-black   ">Nuestros Trabajos</h2>
      
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
        <div className="z-10 fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-90 backdrop-blur " >
         <div className=" p-4 h-[95%] w-[90%] bg-white rounded-2xl flex flex-col ">
          <div className="flex">
          <img
            className=" ml-12 w-[550px] h-[550px] rounded-2xl mt-2"
            src={projectData[zoomedIndex].productImage}
          />
          <div>
          <h5 className=" text-7xl mt-7 ml-12 mb-12  tracking-tight text-black dark:text-gray-900 flex flex-col" >
            {projectData[zoomedIndex].productName}
          </h5><hr style={{ borderColor: "#999", margin:10 }} /><p className=" font-normal text-5xl ml-10 text-end text-gray-900 dark:text-gray-200">
          {projectData[zoomedIndex].productDescription1}
        </p>
          </div>
          </div>
          <div className=" w-[47%] "style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="w-[125px] h-[45px] text-white bg-red-600 hover:bg-gray-500
          active:bg-gray-700 text-base font-thin p-2 pl-3 pr-3 rounded-xl m-5 ml-11" onClick={() => setZoomedIndex(null)}>
          Volver
        </button>
        <a>
        <Link className="w-max h-max ml-3 mr-3" to={`/app/home/contacto`}>
        <button className="w-[125px] h-[45px] text-white bg-gray-600 hover:bg-red-700
          active:bg-red-700 text-base font-thin p-2 pl-3 pr-3 rounded-xl m-5 ml-11" >
          Contratanos
        </button>
        </Link>
        </a>
          </div>
         </div>
        </div>
      )}
    </div>
  );
};

export default TrabajosPage;