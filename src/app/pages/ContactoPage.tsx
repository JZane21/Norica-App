
import { EditableImage } from "../components/EditableImage";

const ContactoPage = () => {
  return (
    <div className="flex flex-col gap-8 w-full items-end" id="RootRoot">
  <div
    className="text-4xl font-['Bruno_Ace'] leading-[49px] mr-64"
    id="Element3"
  >
    Comunicate con{" "}
    <div className="text-[#a40000] contents" id="Element1">
      nosotros
    </div>
    <div className="contents" id="Element2">
      {" "}
    </div>
  </div>
  <div className="self-stretch flex flex-row ml-32 gap-6 items-start">
    <div className="flex flex-col gap-6 w-3/5 items-start">
      <div className="self-end flex flex-row mr-8 gap-20 w-1/2 items-start">
        <div
          className="font-['Bruno_Ace'] leading-[22.4px] text-[#000000]"
          id="Element5"
        >
          Telefonos:
          <br />
          <div className="contents" id="Element4">
            <br />
            -60551854
            <br />
            <br />
            -72069759
            <br />
          </div>
        </div>
        <div
          className="font-['Bruno_Ace'] leading-[22.4px] text-[#000000]"
          id="Element7"
        >
          Email
          <div className="contents" id="Element6">
            ;<br />
            <br />
            -ndica@gmail.com
            <br />
            <br />
            -ndica@gmail.com
            <br />
          </div>
        </div>
      </div>
      
    <EditableImage urlImg={"https://file.rendit.io/n/F0MikayQlFvPR6DeoBoD.png"} styles={"rounded-lg"} imageTitle={""}/>
     
    
    </div>
    <div className="relative flex flex-col justify-end pt-16 w-2/5 items-start">
      <div
        className="font-['Bruno_Ace'] leading-[22.4px] text-[#000000] absolute top-0 left-1 h-20 w-[355px]"
        id="Element9"
      >
        Direccion:
        <br />
        <div className="contents" id="Element8">
          <br />
          Calle 15 de Calacoto. Av, Los Sauces
          <br />
        </div>
      </div>
      <img
        src="https://file.rendit.io/n/6eddaub3E8aexqB1oitl.png"
        className="relative"
        id="S"
      />
    </div>
  </div>
</div>
  );
};

export default ContactoPage;