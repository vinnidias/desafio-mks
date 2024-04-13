import Image from "next/image";
import shopBag from "../assets/shopping-bag.svg"

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
  return (
    <div className="flex flex-col min-w-[217px] min-h-72 items-center justify-between pt-4 shadow-lg rounded-md "  >
      <Image alt="foto do produto" src={photo} width={110} height={138} />

      <div className="flex w-full justify-between px-4 items-end">
        <span className="font-semibold">{name}</span>
        <span className="bg-[#373737] text-white font-bold p-2 rounded-lg">R${price.replace(".", ",")}</span>
      </div>
      <span className="flex w-full text-ellipsis overflow-hidden p-4">{description}</span>
      <button className="flex justify-center gap-4 p-2 font-bold text-white bg-[#0F52BA] w-full rounded-b-md"> <Image alt="ícone de compra" src={shopBag}/> COMPRAR</button>
    </div>
  );
}
