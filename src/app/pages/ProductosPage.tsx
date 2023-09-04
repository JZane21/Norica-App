import { useEffect, useState } from "react";
import { Product } from "../../models/productModel";
import { ProductCard } from "../components/ProductCard";
import { ModalPage } from "../../modals/ModalPage";
import { ModalBuyProduct } from "../../modals/ModalBuyProduct";
import { ModalLoading } from "../../modals/ModalLoading";

export const ProductosPage = () => {
  const product: Product = {
    name: "producto uno",
    price: 192,
    quantity: 49,
    available: true,
    imageUrl: `https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  };

  const BASE_PRODUCT: Product = {
    name: "",
    price: 0,
    quantity: 0,
    available: false,
    imageUrl: "",
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
      <ProductCard
        product={product}
        setProductToBuy={setProductToBuy}
        setOpenModal={setOpenModal}
      />
    </>
  );
};
