import { useEffect, useState } from "react";
import { Product } from "../../models/productModel";
import { ProductCard } from "../components/ProductCard";
import { ModalPage } from "../../modals/ModalPage";
import { ModalBuyProduct } from "../../modals/ModalBuyProduct";
import { ModalLoading } from "../../modals/ModalLoading";
import MultiSlider from "../components/MultiSlider";

export const ProductosPage = () => {
  const PRODUCTS_DATA = [
    {
    name: "producto 1",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcionhjrne  ijgbwibgfiebwdihgvbhi edhfebfgihgihgh bwihdbhisdbvifshd bvidsbivjb iuwreiugwrig buiwfuhewiufh iuuifegwifugbwuif sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 2",
    price: 132,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 3",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 4",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
   },
  {
    name: "producto 5",
    price: 132,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
   },
  {
    name: "producto 6",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 7",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 8",
    price: 132,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 9",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 10",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 11",
    price: 132,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
  {
    name: "producto 12",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    description: "descripcion sfgvsdfvsakhfj ewjfbwehfiweh wefhwebfih",
  },
];

  const BASE_PRODUCT: Product = {
    name: "",
    price: 0,
    quantity: 0,
    available: false,
    imageUrl: "",
    description:"",
  };

  const [productToBuy, setProductToBuy] = useState<Product>(BASE_PRODUCT);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const addToChat = (product: Product, quantity: number) => {
    alert(
      `Product: ${product.name}\nAmount: ${quantity}\nPrice: ${
        quantity * product.price
      }`
    );
    setOpenModal(false);
    setProductToBuy(BASE_PRODUCT);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const availableProducts = PRODUCTS_DATA.filter((product) => product.available);

  return (
    <>
      {(openModal || loading) && (
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
          </>
        </ModalPage>
      )}
      <div className=" p-5">
      <MultiSlider>
      {availableProducts.map((item) => (
        <ProductCard
        product={item}
        setProductToBuy={setProductToBuy}
        setOpenModal={setOpenModal}
      />
      ))}
      </MultiSlider>
      </div>
    </>
  );
};
