import { EditableImage } from "./EditableImage";

interface Props {
  styles: string;
  imageUrl: string;
  name: string;
}

export const ImageProduct = ({ styles, imageUrl, name }: Props) => {
  return (
    <div className="flex flex-row ">
      <h5 className="text-3xl ml-2 mr-2  font-semibold tracking-tight text-white ">
        <p>{name}</p>
      </h5>
      <div className=" mt-2 ">
        <EditableImage
          urlImg={imageUrl}
          styles={styles}
          imageTitle={"product"}
        />
      </div>
    </div>
  );
};
