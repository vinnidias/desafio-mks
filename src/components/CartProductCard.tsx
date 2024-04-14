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

  useEffect(() => {
    const productIndex = selectedProducts.findIndex((value) => value.id === id);
    setTotalAmount(selectedProducts[productIndex].amount);
  }, [selectedProducts, increment, id]);

  return (
    <div className="flex items-center justify-between rounded-md p-4 bg-white">
      <Image alt="foto da imagem" src={photo} width={80} height={80} />
      <p>{name}</p>
      <span>
        {" "}
        <button
          onClick={() => {
            setIncrement(!increment);
            if (totalAmount > 1) {
              const isSelected = selectedProducts.findIndex(
                (value) => value.id === id
              );
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
          }}
        >
          {" "}
          -{" "}
        </button>{" "}
        qtd: {totalAmount}{" "}
        <button
          onClick={() => {
            setIncrement(!increment);
            const isSelected = selectedProducts.findIndex(
              (value) => value.id === id
            );
            selectedProducts.splice(isSelected, 1, {
              id,
              name,
              price,
              photo,
              amount: selectedProducts[isSelected].amount + 1,
            });

            setSelectedProducts(selectedProducts);
          }}
        >
          +
        </button>
      </span>
      <span>R${price.replace(".", ",")}</span>
    </div>
  );
}
