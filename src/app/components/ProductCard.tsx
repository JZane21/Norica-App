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
  const { name, price, imageUrl } = product;
  return (
    <Card className="bg-gray-900 hover:bg-gray-600 rounded-[40px] m-2 mb-3 "  onClick={() => {
      setProductToBuy(product);
      setOpenModal(true);
    }}>
      <ImageProduct
        styles={"w-[90%] h-[200px] rounded-lg"}
        imageUrl={imageUrl || ""}
        name={name}
      />
        <span className="-mt-10  text-xl  text-white dark:text-white">
          {price} Bs.
        </span>
       
    </Card>
  );
};
