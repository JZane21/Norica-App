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
import MultiSlider from "../components/MultiSlider";

export const ProductosPage = () => {
  const { addedProducts } = useStore();
  const { productsListDB } = useStore();

  const dispatch = useDispatch();

  const { saveDataLS } = useLocalStorage();

  // const PRODUCTS_DATA = [
  //   {
  //     name: "producto 1",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description:
  //       "descripcionhjrne  ijgbwibgfiebwdihgvbhi edhfebfgihgihgh bwihdbhisdbvifshd bvidsbivjb iuwreiugwrig buiwfuhewiufh iuuifegwifugbwuif sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 2",
  //     price: 132,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 3",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 4",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 5",
  //     price: 132,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 6",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 7",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 8",
  //     price: 132,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 9",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 10",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 11",
  //     price: 132,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  //   {
  //     name: "producto 12",
  //     price: 192,
  //     quantity: 49,
  //     available: true,
  //     imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  //     description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  //   },
  // ];

  const BASE_PRODUCT: Product = {
    name: "",
    price: 0,
    quantity: 0,
    imageUrl: "",
    description: "",
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
      <div className=" p-5">
        <MultiSlider>
          {productsList.map((item) => {
            if (item.quantity !== 0) {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  setProductToBuy={setProductToBuy}
                  setOpenModal={setOpenModal}
                />
              );
            }
          })}
        </MultiSlider>
      </div>
    </>
  );
};
