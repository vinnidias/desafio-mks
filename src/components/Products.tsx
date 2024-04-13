"use client";

import { getProducts } from "@/service/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

type IProductsData = {
  products: {
    count: number;
    products: {
      id: number;
      name: string;
      brand: string;
      description: string;
      photo: string;
      price: string;
      createdAt: Date;
      updatedAt: Date;
    }[];
  };
};

export default function Products(props: IProductsData) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: props.products,
  });

  console.log("response: ", data);
  if (isLoading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>{isError}</p>
      </div>
    );
  }
  return (
    <div className="grid w-full grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-12">
      {data.products.map((item) => (
        <ProductCard
          key={item.id}
          brand={item.brand}
          description={item.description}
          id={item.id}
          name={item.name}
          photo={item.photo}
          price={item.price}
        />
      ))}
    </div>
  );
}
