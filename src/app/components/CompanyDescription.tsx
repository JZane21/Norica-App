
import { EditableImage } from "./EditableImage";
import HireUs from "./HireUs";
import ContactUs from "./ContactUs";


interface Props{
  width:number;
  }
function CompanyDescription({width}:Props) {
  return (

    <div className="font-['Bruno_Ace'] flex flex-col pb-32 gap-16 w-full" id="RootRoot ">
    <div className="flex flex-row gap-8 items-start ml-3 mr-6">
      <div className="flex flex-col mt-6 gap-5 w-1/2 items-start">
        <div className="font-['Bruno_Ace'] leading-[22.4px]" id="Element4">
          NORICA
        </div>
        <div
          className="text-3xl font-['Bruno_Ace'] tracking-[5] leading-[35px] w-full"
          id="Element3"
        >
          "Forjamos visiones a través del diseño y la construcción excepcional."
          <br />
          <br />
        </div>
        
        <div className="flex flex-row justify-around p-1 m-1 w-max">
        <HireUs width={width} />
        <ContactUs width={width} />
       <div/>
      </div>
      </div>
     <EditableImage urlImg={"https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} styles={"  w-1/2 h-[347px] rounded-[24px]"} imageTitle={""}/>
     
    </div>
    <div className="flex flex-row gap-12 items-start">
      <div className="flex flex-col gap-16 w-1/2">
        <div className="flex flex-col gap-4 items-start">
          <div
            className="text-3xl font-['Bruno_Ace'] tracking-[5] leading-[35px] text-[#a40000]"
            id="Element5"
          >
            ¿QUIENES SOMOS?
          </div>
          <div className="self-stretch relative flex flex-col justify-end pt-[412px]">
            <div
              className="text-sm font-['Bruno_Ace'] tracking-[5] leading-[35px] absolute top-0 left-1 h-[525px] w-full"
              id="Element1"
            >
              Somos una empresa comprometida con la satisfacción de las
              necesidades de diseño y construcción de nuestros clientes. Ofrecemos
              soluciones de calidad y al mejor precio, manteniendo la
              transparencia y la excelencia en el servicio. Nuestro equipo está
              formado por profesionales altamente calificados en diversas
              especialidades de ingeniería y construcción.
              <br />
              <br />
              <br />
            </div>
            <div className="bg-[#767272] mix-blend-difference relative mr-4 h-[347px] shrink-0 rounded-[24px]" />
          </div>
        </div>
        <div className="relative flex flex-col justify-end mr-1 pt-16 items-start">
          <div
            className="text-3xl font-['Bruno_Ace'] tracking-[5] leading-[35px] text-[#a40000] absolute top-0 left-1 h-24 w-2/3"
            id="Element7"
          >
            ¿QUE OFRECEMOS?
            <br />
          </div>
          <div
            className="text-sm font-['Bruno_Ace'] tracking-[5] leading-[35px] relative w-full"
            id="Element8"
          >
            • Proyectos de Obras civiles.
            <br />• Desarrollo de Habilitaciones Urbanas.
            <br />• Cálculos estructurales.
            <br />• Diseño de Proyectos Arquitectónicos.
            <br />• Servicios especializados (estructuras, instalaciones
            eléctricas, instalaciones sanitarias).
            <br />• Refacción de viviendas.
            <br />• Refuerzos y diagnósticos estructurales en general.
            <br />• Asesoría y gestión inmobiliaria.
            <br />• Asesoramiento financiero y legal.
          </div>
        </div>
      </div>
      <div className="self-end flex flex-col mb-16 gap-5 w-1/2 items-start">
        <div
          className="text-3xl font-['Bruno_Ace'] tracking-[5] leading-[35px] text-[#a40000] ml-2"
          id="Element6"
        >
          ANTECEDENTES{" "}
        </div>
        <div className="self-stretch relative flex flex-col justify-end pt-[551px]">
          <div
            className="text-sm font-['Bruno_Ace'] tracking-[5] leading-[35px] absolute top-0 left-2 h-[630px] w-full"
            id="Element2"
          >
            NORICA S.R.L. se inició en 2006 como una empresa enfocada en el diseño
            y ejecución de viviendas de nivel social medio y residencial. Con 17
            años de experiencia en el sector de la construcción, hemos competido
            exitosamente gracias a la calidad de nuestras obras y precios
            competitivos. Hemos ampliado nuestros servicios y desarrollado
            proyectos desde su concepción hasta su comercialización, brindando
            capacidad de gestión y solvencia técnica.
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="bg-[#767272] mix-blend-difference relative mr-5 h-[347px] shrink-0 rounded-[24px]" />
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default CompanyDescription;
