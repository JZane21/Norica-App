import { memo } from "react";
import { Product } from "../../models/productModel";
import { AddedProduct } from "./AddedProduct";

interface Props {
  cartProducts: Product[];
  setCartProducts: (param: Product[]) => void;
}

export const ListAddedProducts = memo(
  ({ cartProducts, setCartProducts }: Props) => {
    return (
      <section className="flex flex-wrap m-1 p-2">
        {cartProducts.map((item, index) => (
          <AddedProduct
            key={item.name + Math.round(Math.random() * 1000000)}
            product={item}
            indexAddedProduct={index}
            quantityRequired={item.quantityToBeBuyed || 1}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </section>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.cartProducts.length === nextProps.cartProducts.length;
  }
);
