import { Product } from "../../models/productModel";

interface Props {
  product: Product;
}

export const AddedProduct = ({ product }: Props) => {
  const ARRAY_INF = Object.values(product);
  return (
    <div
      className="flex flex-col bg-red-400 text-white font-medium rounded-lg shadow-md
    w-[300px] h-max"
    >
      {ARRAY_INF.map((item, index) => {
        if (index < ARRAY_INF.length - 1) {
          return (
            <p key={item} className="text-lg p-1 m-2">
              {item}
            </p>
          );
        }
      })}
    </div>
  );
};
