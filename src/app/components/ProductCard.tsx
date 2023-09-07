import { Card } from "flowbite-react";
import { EditableImage } from "./EditableImage";
import { Product } from "../../models/productModel";
import { ImageProduct } from "./ImageProduct";

interface Props {
  product: Product;
  setProductToBuy: (param: Product) => void;
  setOpenModal: (param: boolean) => void;
}

export const ProductCard = ({
  product,
  setProductToBuy,
  setOpenModal,
}: Props) => {
  const { name, price, quantity, description, imageUrl } = product;
  return (
    <Card className="w-[325px] h-max">
      <ImageProduct
        styles={"w-max h-[300px] rounded-lg"}
        imageUrl={imageUrl || ""}
        name={name}
      />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price} Bs.
        </span>
        <button
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium
          text-white hover:bg-cyan-800 focus:outline-none focus:ring-2
          focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700
          dark:focus:ring-cyan-800"
          onClick={() => {
            setProductToBuy(product);
            setOpenModal(true);
          }}
        >
          Añadir a Carrito
        </button>
      </div>
    </Card>
  );
};
