import { api } from "./api";

type apiProps = {
  page: number;
  rows: number;
  sortBy: "id" | "name" | "price";
  orderBy: "DESC" | "ASC";
};

type ResponseData = {
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
  count: number;
};
export const getProducts = async (): Promise<ResponseData> => {
  const response = await api.get(
    `/products?page=${1}&rows=${8}&sortBy=${"name"}&orderBy=${"ASC"}`
  );
  return response.data;
};
