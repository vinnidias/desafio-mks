import Image from "next/image";
import cartIcont from "../assets/Vector.svg"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center min-w-screen min-h-[100px] px-24 bg-[#0F52BA]">
      <p className="text-white">MKS sistemas</p>
      <button className="flex min-w-24 min-h-12 justify-center items-center gap-4 rounded-md bg-white font-bold"><Image alt="ícone do carrinho" src={cartIcont}/> 0 </button>
    </div>
  );
}
