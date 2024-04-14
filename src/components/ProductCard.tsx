"use client";
import Image from "next/image";
import shopBag from "../assets/shopping-bag.svg";
import { useCartContext } from "@/context/cartContext";
import { useState } from "react";

type IProductProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
};

export default function ProductCard(props: IProductProps) {
  const { id, name, brand, description, photo, price } = props;
  const { selectedProducts, setSelectedProducts, setIsOpen } = useCartContext();
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex flex-col max-w-52 max-h-76 lg:max-w-72 lg:max-h-104 items-center justify-between pt-4 shadow-xl rounded-md">
      <Image alt="foto do produto" src={photo} width={110} height={138} />

      <div className="flex w-full justify-between px-4 items-end">
        <span className="font-semibold text-base">{name}</span>
        <span className="bg-[#373737] text-white font-bold p-1 2xl:p-2 rounded-lg text-base">
          R${price.replace(".", ",")}
        </span>
      </div>
      <span className="flex w-full text-ellipsis overflow-hidden p-4 text-xs ">
        {description}
      </span>
      <button
        onClick={() => {
          const isSelected = selectedProducts.findIndex(
            (value) => value.id === id
          );
          setIsOpen(false)
          if (isSelected >= 0) {
            selectedProducts.splice(isSelected, 1, {
              id,
              name,
              price,
              photo,
              amount: selectedProducts[isSelected].amount + 1,
            });

            setSelectedProducts(selectedProducts);
          } else {
            setSelectedProducts((prev) => [
              ...prev,
              { id, name, photo, price, amount },
            ]);
          }
        }}
        className="flex justify-center gap-4 p-2 font-semibold text-white text-base bg-[#0F52BA] w-full rounded-b-md"
      >
        {" "}
        <Image
          alt="ícone de compra"
          src={shopBag}
          className="min-w-4 min-h-4"
        />{" "}
        COMPRAR
      </button>
    </div>
  );
}
