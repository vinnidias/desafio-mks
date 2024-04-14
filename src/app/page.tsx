import Products from "@/components/Products";
import { getProducts } from "@/service/getProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default async function Home() {
  const initialData = await getProducts();

  return (
    <div className="flex flex-col items-center p-16 px-64 min-h-[calc(100vh-132px)] 3xl:pt-32 3xl:px-128 ">
      <Products products={initialData} />
    </div>
  );
}
