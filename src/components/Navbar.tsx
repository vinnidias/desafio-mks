"use client";

import { useCartContext } from "@/context/cartContext";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center min-w-screen min-h-[100px] px-24 bg-[#0F52BA]">
      <p className="text-white">MKS sistemas</p>
      <ShoppingCart />
    </nav>
  );
}
