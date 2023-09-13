
import { EditableImage } from "../components/EditableImage";

const ContactoPage = () => {
  return (
    <div className="flex flex-col gap-14 w-full items-start" id="RootRoot">
    <div
      className="text-6xl font-['Bruno_Ace'] leading-[50px] ml-40"
      id="Element7"
    >
      Comunicate con{" "}
      <div className="text-[#a40000] contents content-center" id="Element5">
        nosotros
      </div>
      <div className="contents" id="Element6">
        {" "}
      </div>
    </div>
    <div className="self-stretch flex flex-row gap-12 items-start">
      <div className="self-end flex flex-col gap-20 items-start">
        <div
          className="font-['Bruno_Ace'] leading-[22.4px] text-[#a40000] ml-1"
          id="Element9"
        >
          Telefonos:
          <br />
          <div className="contents text-[#000000]" id="Element8">
            <br />
            -60551854
            <br />
            <br />
            -72069759
            <br />
          </div>
        </div>
        <div
          className="font-['Bruno_Ace'] leading-[22.4px] text-[#a40000] mb-px ml-1"
          id="Element4"
        >
          Email
          <div className="contents text-[#000000]" id="Element3">
            ;<br />
            <br />
            -ndica@gmail.com
            <br />
            <br />
            -ndica@gmail.com
            <br />
          </div>
        </div>
        <div
          className="font-['Bruno_Ace'] leading-[22.4px] text-[#a40000]"
          id="Element2"
        >
          Direccion:
          <br />
          <div className="contents text-[#000000]" id="Element1">
            <br />
            Calle 15 de Calacoto. Av, Los Sauces
            <br />
          </div>
        </div>
      </div>
      <img
        src="https://file.rendit.io/n/1cXR8kuXm4PX81Aj6s6W.png"
        className="mb-4"
        id="S"
      />
    </div>
  </div>
  
  );
};

export default ContactoPage;