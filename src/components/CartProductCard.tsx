"use client";

import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
import { useEffect, useState } from "react";

type ICartProductProps = {
  id: number;
  name: string;
  photo: string;
  price: string;
  amount: number;
};

export default function CartProductCard(props: ICartProductProps) {
  const { selectedProducts, setSelectedProducts } = useCartContext();
  const { id, amount, name, photo, price } = props;
  const [totalAmount, setTotalAmount] = useState(0);
  const [increment, setIncrement] = useState(false);

  const handleRemoveItem = () => {
    setIncrement(!increment);
    if (totalAmount > 1) {
      const isSelected = selectedProducts.findIndex((value) => value.id === id);
      selectedProducts.splice(isSelected, 1, {
        id,
        name,
        price,
        photo,
        amount: selectedProducts[isSelected].amount - 1,
      });

      setSelectedProducts(selectedProducts);
    } else {
      return;
    }
  };

  const handleAddItem = () => {
    setIncrement(!increment);
    const isSelected = selectedProducts.findIndex((value) => value.id === id);
    selectedProducts.splice(isSelected, 1, {
      id,
      name,
      price,
      photo,
      amount: selectedProducts[isSelected].amount + 1,
    });

    setSelectedProducts(selectedProducts);
  };

  const handleDeleteItem = () => {
    const isSelected = selectedProducts.findIndex((value) => value.id === id);
    selectedProducts.splice(isSelected, 1);

    setSelectedProducts(selectedProducts);
  };

  useEffect(() => {
    const productIndex = selectedProducts.findIndex((value) => value.id === id);
    setTotalAmount(selectedProducts[productIndex].amount);
  }, [selectedProducts, increment, id]);

  return (
    <div className="relative flex items-center justify-between rounded-md p-4 bg-white">
      <button
        onClick={handleDeleteItem}
        className="absolute top-0 right-0 mt-[-1%] mr-[-1%] flex items-center justify-center w-6 h-6 bg-black text-white font-semibold rounded-[50%]"
      >
        X
      </button>
      <div className="flex gap-4 items-center w-52">
        <Image alt="foto da imagem" src={photo} width={80} height={80} />
        <p>{name}</p>
      </div>

      <div className="flex flex-col self-start">
        <p>Qtd:</p>
        <span className="border flex min-w-full px-4 py-1 gap-2 rounded-lg font-semibold">
          <button className="border-r pr-2" onClick={handleRemoveItem}>
            {" "}
            -
          </button>{" "}
          {totalAmount}
          <button className="border-l pl-2" onClick={handleAddItem}>
            +
          </button>
        </span>
      </div>

      <span className="self-center font-semibold">
        R${price.replace(".", ",")}
      </span>
    </div>
  );
}
