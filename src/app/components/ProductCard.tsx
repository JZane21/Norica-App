import { Card } from "flowbite-react";
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
    <Card
      className="bg-gray-900 hover:bg-gray-600 rounded-[40px] m-2 mb-3
      flex flex-col items-center"
      onClick={() => {
        setProductToBuy(product);
        setOpenModal(true);
      }}
    >
      <ImageProduct
        styles={"w-[250px] h-[250px] rounded-lg"}
        imageUrl={imageUrl || ""}
        name={name}
      />
      <span className="text-xl text-white dark:text-white font-medium">
        {price} Bs.
      </span>
    </Card>
  );
};
