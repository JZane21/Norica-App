import { EditableImage } from "./EditableImage";

interface Props {
  styles: string;
  imageUrl: string;
  name: string;
}

export const ImageProduct = ({ styles, imageUrl, name }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <EditableImage
          urlImg={imageUrl}
          styles={styles}
          imageTitle={"product"}
        />
      </div>
      <h5 className="text-xl font-semibold mt-3 tracking-tight text-gray-900 dark:text-white">
        <p>{name}</p>
      </h5>
    </div>
  );
};
