import { Product } from "../../models/productModel";
import { useDispatch } from "../../store/StoreProvider";
import { CustomButton } from "./CustomButton";
import { ImageProduct } from "./ImageProduct";
import { types } from "../../store/storeReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { memo, useEffect, useState } from "react";

interface Props {
  product: Product;
  indexAddedProduct: number;
  quantityRequired: number;
  cartProducts: Product[];
  setCartProducts: (param: Product[]) => void;
}

export const AddedProduct = memo(
  ({
    product,
    indexAddedProduct,
    quantityRequired,
    cartProducts,
    setCartProducts,
  }: Props) => {
    const dispatch = useDispatch();
    const { name, imageUrl, quantity } = product;
    const { saveDataLS } = useLocalStorage();

    const [quantityToBuy, setQuantityToBuy] = useState<number>(0);

    useEffect(() => {
      setQuantityToBuy(quantityRequired);
    }, []);

    useEffect(() => {
      updateAddedProducts();
    }, [quantityToBuy]);

    const updateAddedProducts = () => {
      let auxAddedProductsList: Product[] = [...cartProducts];
      auxAddedProductsList[indexAddedProduct].quantityToBeBuyed = quantityToBuy;
      setCartProducts(auxAddedProductsList);
      dispatch({ type: types.setAddedProducts, value: auxAddedProductsList });
      saveDataLS("addedProducts", { addedProducts: auxAddedProductsList });
    };

    const reduceQuantity = () => {
      if (quantityToBuy > 1) {
        setQuantityToBuy(quantityToBuy - 1);
      }
    };

    const increaseQuantity = () => {
      if (quantityToBuy < quantity) {
        console.log(quantity);
        setQuantityToBuy(quantityToBuy + 1);
      }
    };

    const deleteProduct = () => {
      const auxAddedProductsList: Product[] = [...cartProducts];
      auxAddedProductsList.splice(indexAddedProduct, 1);
      setCartProducts(auxAddedProductsList);
      dispatch({ type: types.setAddedProducts, value: auxAddedProductsList });
      saveDataLS("addedProducts", { addedProducts: auxAddedProductsList });
    };

    return (
      <section
        className="flex flex-col bg-slate-400 text-white font-medium rounded-lg shadow-md
      w-[300px] h-max p-1"
      >
        <ImageProduct
          styles={"w-[150x] h-[150px] rounded-md"}
          imageUrl={imageUrl || ""}
          name={name}
        />
        <h1 className="text-base font-thin m-1">
          Cantidad a comprar: {quantityToBuy}
        </h1>
        <div className="flex flex-row justify-between flex-wrap m-1">
          <CustomButton
            textButton={"delete"}
            normalBg={"bg-red-500"}
            hoverBg={"hover:bg-red-400"}
            activeBg={"active:bg-red-600"}
            textColor={"text-white"}
            typeButton={"button"}
            width={"48px"}
            height={"25px"}
            action={deleteProduct}
          />
          <CustomButton
            textButton={"-"}
            normalBg={"bg-slate-500"}
            hoverBg={"hover:bg-slate-400"}
            activeBg={"active:bg-slate-600"}
            textColor={"text-white"}
            typeButton={"button"}
            width={"48px"}
            height={"25px"}
            action={reduceQuantity}
          />
          <CustomButton
            textButton={"+"}
            normalBg={"bg-red-500"}
            hoverBg={"hover:bg-red-400"}
            activeBg={"active:bg-red-600"}
            textColor={"text-white"}
            typeButton={"button"}
            width={"48px"}
            height={"25px"}
            action={increaseQuantity}
          />
        </div>
      </section>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.indexAddedProduct === nextProps.indexAddedProduct &&
      prevProps.cartProducts === nextProps.cartProducts
    );
  }
);
