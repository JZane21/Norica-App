import { useEffect, useMemo, useState } from "react";
import { useDispatch, useStore } from "../../store/StoreProvider";
import { Product } from "../../models/productModel";
import { ModalPage } from "../../modals/ModalPage";
import { ModalLoading } from "../../modals/ModalLoading";
import { EmptyCartPage } from "./EmptyCartPage";
import { ListAddedProducts } from "../components/ListAddedProducts";
import { CustomButton } from "../components/CustomButton";
import { ModalConfirmation } from "../../modals/ModalConfirmation";
import { getProducts, setProducts } from "../../firebase/products";
import { types } from "../../store/storeReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ModalMessage } from "../../modals/ModalMessage";

export const CarritoPage = () => {
  const dispatch = useDispatch();
  const { addedProducts } = useStore();
  const { saveDataLS } = useLocalStorage();

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [confirmation, setConfirmation] = useState<boolean>(false);

  const [process, setProcess] = useState<boolean>(false);

  const [sucess, setSucess] = useState<boolean>(false);

  const messageText: string = useMemo(() => {
    let auxVar: string = "";
    if (cartProducts.length !== 0 && confirmation) {
      cartProducts.map((item) => {
        auxVar += "* " + item.name + " - " + item.quantityToBeBuyed + "\n";
      });
      return auxVar;
    } else {
      return "";
    }
  }, [confirmation]);

  const totalPrice: number = useMemo(() => {
    if (cartProducts.length !== 0 && confirmation) {
      return cartProducts.reduce((a, b) => {
        return a + b.price * (b.quantityToBeBuyed || 1);
      }, 0);
    } else {
      return 0;
    }
  }, [confirmation]);

  useEffect(() => {
    if (addedProducts.length !== 0) {
      setCartProducts(addedProducts);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const buyProducts = async () => {
    setProcess(true);
    try {
      for (let index = 0; index < cartProducts.length; index++) {
        await setProducts(
          cartProducts[index],
          cartProducts[index].quantityToBeBuyed || 1
        );
      }
      const data = await getProducts();
      dispatch({ type: types.setProductsList, value: data });
      dispatch({ type: types.eraseAddedProducts });
      saveDataLS("addedProducts", { addedProducts: [] });
      setCartProducts([]);
    } catch (err) {
      console.error(err);
    }
    setProcess(false);
    console.log("compra exitosa");
  };

  return (
    <>
      {(loading || confirmation || process || sucess) && (
        <ModalPage>
          <>
            {(loading || process) && <ModalLoading />}
            {confirmation && (
              <ModalConfirmation
                actionOne={() => {
                  setConfirmation(false);
                  buyProducts();
                }}
                actionTwo={() => setConfirmation(false)}
                title={"¿Confirmar Compra?"}
                message={`Se comprarán los siguientes productos:
              ${messageText}
              Precio Total: ${totalPrice}
              `}
              />
            )}
            {sucess && (
              <ModalMessage
                action={() => setSucess(false)}
                title={"Compra exitosa"}
                message={"Los artículos fueron comprados exitosamente"}
              />
            )}
          </>
        </ModalPage>
      )}
      <>
        {cartProducts.length !== 0 ? (
          <>
            <h1 className="text-xl font-sans font-semibold">
              Precio Total: {totalPrice}
            </h1>
            <ListAddedProducts
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </>
        ) : (
          <EmptyCartPage />
        )}
      </>
      {cartProducts.length !== 0 && (
        <CustomButton
          textButton={"Comprar"}
          normalBg={"bg-sky-500"}
          hoverBg={"hover:bg-sky-400"}
          activeBg={"active:bg-sky-600"}
          textColor={"text-white"}
          typeButton={"button"}
          width={"100px"}
          height={"25px"}
          action={() => {
            setConfirmation(true);
          }}
        />
      )}
    </>
  );
};
