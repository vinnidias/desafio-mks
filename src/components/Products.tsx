"use client";

import { getProducts } from "@/service/getProducts";
import { useQuery } from "@tanstack/react-query";

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
    <div>
      {data.products.map((item) => (
        <p key={item.id}> {item.name}</p>
      ))}
    </div>
  );
}
