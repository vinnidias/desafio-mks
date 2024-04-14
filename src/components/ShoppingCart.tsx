"use client"
import Image from "next/image";

import { useCartContext } from "@/context/cartContext";
import cartIcont from "../assets/Vector.svg";
import CartProductCard from "./CartProductCard";
import { useEffect, useState } from "react";

export default function ShoppingCart() {
  const {
    isOpen,
    setIsOpen,
    selectedProducts,
    totalProducts,
    totalPurchase,
  } = useCartContext();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex min-w-24 min-h-12 justify-center items-center gap-4 rounded-md bg-white font-bold"
      >
        <Image alt="ícone do carrinho" src={cartIcont} /> {totalProducts}{" "}
      </button>
      {isOpen && (
        <div className="flex flex-col w-[30%] absolute top-0 right-0 min-h-[100%] justify-between bg-[#0F52BA] shadow-xl">
          <div className="flex justify-between p-12 pr-4">
            <p className="text-white font-bold text-2xl text-clip overflow-hidden w-36">
              Carrinho de compras
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-10 h-10 font-bold rounded-[50%] bg-black text-white"
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-12 w-full min-h-[60vh] max-h-[60vh] px-12 overflow-y-auto">
            {selectedProducts.map((product, index) => (
              <CartProductCard
                key={index}
                id={product.id}
                amount={product.amount}
                name={product.name}
                photo={product.photo}
                price={product.price}
              />
            ))}
          </div>

          <div>
            <div className="flex justify-between px-12 pb-4">
              <p className="font-bold text-white text-3xl">Total</p>

              <span className="font-bold text-white text-3xl">
                R${totalPurchase.toFixed(2).toString().replace(".", ",")}
              </span>
            </div>
            <button className="flex justify-center items-center min-w-full min-h-24  font-bold text-white text-3xl bg-black">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
}
