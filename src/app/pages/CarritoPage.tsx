
  

import { useEffect, useState } from "react";
import { useDispatch, useStore } from "../../store/StoreProvider";
import { Product } from "../../models/productModel";
import { ModalPage } from "../../modals/ModalPage";
import { ModalLoading } from "../../modals/ModalLoading";
import { AddedProduct } from "../components/AddedProduct";
import { types } from "../../store/storeReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EmptyCartPage } from "./EmptyCartPage";

export const CarritoPage = () => {
  const { addedProducts } = useStore();
  const dispatch = useDispatch();

  const { saveDataLS } = useLocalStorage();

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (addedProducts.length !== 0) {
      setCartProducts(addedProducts);
      dispatch({ type: types.setAddedProducts, value: addedProducts });
      saveDataLS("addedProducts", { addedProducts: addedProducts });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && (
        <ModalPage>
          <ModalLoading />
        </ModalPage>
      )}
      <>
        {cartProducts.length !== 0 ? (
          <section className="flex flex-wrap m-1 p-2">
            {cartProducts.map((item) => (
              <AddedProduct
                key={item.name + Math.round(Math.random() * 1000000)}
                product={item}
              />
            ))}
          </section>
        ) : (
          <EmptyCartPage />
        )}
      </>
    </>
  );
};

