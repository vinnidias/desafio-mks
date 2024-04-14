"use client";

import { useCartContext } from "@/context/cartContext";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center min-w-screen min-h-[100px] px-24 bg-[#0F52BA]">
      <div className="flex items-center gap-2">
        <p className="text-white text-4xl font-semibold">MKS </p>
        <p className="text-white text-xl">sistemas</p>
      </div>

      <ShoppingCart />
    </nav>
  );
}
