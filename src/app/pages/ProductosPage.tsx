import { useEffect, useState } from "react";
import { Product } from "../../models/productModel";
import { ProductCard } from "../components/ProductCard";
import { ModalPage } from "../../modals/ModalPage";
import { ModalBuyProduct } from "../../modals/ModalBuyProduct";
import { ModalLoading } from "../../modals/ModalLoading";
import { useDispatch, useStore } from "../../store/StoreProvider";
import { types } from "../../store/storeReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getProducts } from "../../firebase/products";
import { ErrorPage } from "./ErrorPage";

export const ProductosPage = () => {
  const { addedProducts } = useStore();
  const { productsListDB } = useStore();

  const dispatch = useDispatch();

  const { saveDataLS } = useLocalStorage();

  const BASE_PRODUCT: Product = {
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    imageUrl: "",
  };

  const [productsList, setProductsList] = useState<Product[]>([]);

  const [productToBuy, setProductToBuy] = useState<Product>(BASE_PRODUCT);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFinded, setErrorFinded] = useState<boolean>(false);

  const setProducts = async () => {
    try {
      const data = await getProducts();
      if (data !== null) {
        setProductsList(data);
        dispatch({ type: types.setProductsList, value: data });
      } else {
        setErrorFinded(true);
      }
    } catch (err) {
      setErrorFinded(true);
    }
  };

  const addToChat = (product: Product, quantity: number) => {
    alert(
      `Product: ${product.name}\nAmount: ${quantity}\nPrice: ${
        quantity * product.price
      }`
    );
    setOpenModal(false);
    setProductToBuy(BASE_PRODUCT);
    const NEW_LIST_ADDED_PRODUCTS: Product[] = [...addedProducts, product];
    dispatch({
      type: types.setAddedProducts,
      value: NEW_LIST_ADDED_PRODUCTS,
    });
    saveDataLS("addedProducts", { addedProducts: NEW_LIST_ADDED_PRODUCTS });
  };

  useEffect(() => {
    if (productsListDB.length === 0) {
      setProducts();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setProductsList(productsListDB);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      {(openModal || loading || errorFinded) && (
        <ModalPage>
          <>
            {openModal && (
              <ModalBuyProduct
                product={productToBuy}
                setOpenModal={setOpenModal}
                addToChart={addToChat}
              />
            )}
            {loading && <ModalLoading />}
            {errorFinded && (
              <ErrorPage
                errorText={"¡Error 404! Vuelva a intentarlo más tarde"}
              />
            )}
          </>
        </ModalPage>
      )}
      {productsList.map((item) => (
        <ProductCard
          key={item.name + item.price}
          product={item}
          setProductToBuy={setProductToBuy}
          setOpenModal={setOpenModal}
        />
      ))}
    </>
  );
};
