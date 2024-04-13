import Products from "@/components/Products";
import { getProducts } from "@/service/getProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default async function Home() {
  const initialData = await getProducts();

  return (
    <div className="flex min-w-screen flex-col min-h-screen items-center p-8 lg:p-40 lg:px-60">
      <Products products={initialData} />
    </div>
  );
}
