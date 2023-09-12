import { Product } from "../../models/productModel";
import { useDispatch } from "../../store/StoreProvider";
import { CustomButton } from "./CustomButton";
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
    const { quantity } = product;
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
        className="flex flex-col rounded-[40px] m-3
    w-[40%] h-max items-center"
      >
        <img
          src={product.imageUrl}
          className="w-[220px] h-[150px] rounded-[40px]"
        />
        <h1 className="text-2xl font-extrabold -mt-8 bg-white p-1 text-red-700 rounded-full">
          X{quantityToBuy}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <h1 className="text-lg">{product.name}</h1>
          <h2 className="text-xl font-semibold ml-5">{product.price} Bs.</h2>
        </div>
        <div className="flex flex-row justify-between flex-wrap m-1">
          <CustomButton
            textButton={"borrar"}
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
