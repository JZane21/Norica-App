import { Button } from "flowbite-react";
import { Product } from "../models/productModel";
import { useState } from "react";
import { ButtonAddChartSection } from "../app/components/ButtonAddChartSection";
import { ImageProduct } from "../app/components/ImageProduct";

interface Props {
  product: Product;
  setOpenModal: (param: boolean) => void;
  addToChart: (product: Product, quantity: number) => void;
}

export const ModalBuyProduct = ({
  product,
  setOpenModal,
  addToChart,
}: Props) => {
  const { name, price, quantity, imageUrl } = product;

  const [amount, setAmount] = useState<number>(1);

  return (
    <>
      <div className="w-[450px] bg-white rounded-lg shadow-lg p-3 flex flex-col">
        <header className="text-base font-light m-3">COMPRAR PRODUCTO</header>
        <div className="flex flex-row flex-wrap justify-around m-3">
          <ImageProduct
            styles={"w-[200px] h-[200px] rounded-lg"}
            imageUrl={imageUrl || ""}
            name={name}
          />
          <section className="flex flex-col">
            <ButtonAddChartSection
              setAmount={setAmount}
              amount={amount}
              quantity={quantity}
            />
            <span className="text-2xl font-semibold">
              Total: {amount * price} Bs.
            </span>
          </section>
        </div>
        <footer className="flex flex-row justify-around w-[200px] m-3">
          <Button onClick={() => addToChart(product, amount)}>Añadir</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </footer>
      </div>
    </>
  );
};
