
import { Product } from "../models/productModel";
import { useState } from "react";
import { ButtonAddChartSection } from "../app/components/ButtonAddChartSection";

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
  const {price, quantity, imageUrl, description, name } = product;

  const [amount, setAmount] = useState<number>(1);

  return (
    <>
      <div className="w-[50%] bg-white rounded-[40px] shadow-lg p-3 flex flex-col">
        <header className="text-base  m-3">COMPRAR PRODUCTO</header>
        <div className="flex flex-row m-3">
          <img className = "w-[60%] rounded-3xl"
            src={imageUrl || ""}
          />
          <section className="ml-5 flex flex-col">
            <h2 className="mt-2 font-bold text-3xl mb-1 ">
              {name}
            </h2>
          <h1 className=" mb-5">
              {description}
            </h1>
            <ButtonAddChartSection
              setAmount={setAmount}
              amount={amount}
              quantity={quantity}
            />
            <h5 className="text-2xl font-semibold">
              Total: {amount * price} Bs.
            </h5>
          </section>
        </div>
        <footer className="flex flex-row justify-center m-3">
        <button
  className="w-[180px] h-[45px] text-white bg-red-600 hover:bg-black
active:bg-gray-700 text-base font-thin rounded-xl " onClick={() => addToChart(product, amount)}>
  Añadir a carrito
</button>
<button
  className="w-[180px] ml-8 h-[45px] text-white bg-gray-600 hover:bg-black
active:bg-gray-700 text-base font-thin rounded-xl " onClick={() => setOpenModal(false)}>
            Cancelar
            </button>
        </footer>
      </div>
    </>
  );
};
