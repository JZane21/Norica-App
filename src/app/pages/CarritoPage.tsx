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
import { BuyForm } from "../components/buyForm";

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
    if (cartProducts.length !== 0) {
      return cartProducts.reduce((a, b) => {
        return a + b.price * (b.quantityToBeBuyed || 1);
      }, 0);
    } else {
      return 0;
    }
  }, [confirmation, cartProducts]);

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

           
           <div className=" flex flex-wrap  justify-center  "  >
           <section className=" flex flex-row rounded-[40px] h-[650px] bg-neutral-200 w-[80%] " >
             <section className =" w-[50%] flex flex-wrap max-h-[700px] overflow-auto justify-center bg-neutral-400 rounded-[40px] p-5">
             <ListAddedProducts
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
              </section>
              <section className="w-[50%]">
              <h1 className="text-3xl font-semibold mt-5 ml-8">Total: {totalPrice}Bs.</h1>
              <section className=" ml-8 mt-5 mb-0 p-5 h-[500px] mr-8 bg-white rounded-[40px]">
               <h3 className="text-2xl">
                 Formulario
               </h3>
               <form>
                <BuyForm/>
                </form>
              </section>
              {cartProducts.length !== 0 && (
                <div className="mr-6 flex flex-row justify-end mb-5"> 
                <CustomButton
                textButton={"Comprar"}
                normalBg={"bg-red-600 "}
                hoverBg={"hover:bg-black"}
                activeBg={"active:bg-gray-700"}
                textColor={"text-white"}
                typeButton={"button"}
                width={"150px"}
                height={"45px"}
                action={() => {
                  setConfirmation(true);
                }}
              />
              </div>
              )}
           </section>
           </section>
           </div>
        ) : (
          <EmptyCartPage />
        )}
      </>
     
    </>
  );
};
