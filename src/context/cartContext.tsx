"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ISelectedProducts = {
  id: number;
  name: string;
  photo: string;
  price: string;
  amount: number;
};

type CartContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedProducts: ISelectedProducts[];
  setSelectedProducts: Dispatch<SetStateAction<ISelectedProducts[]>>;
  totalProducts: number;
  totalPurchase: number;
};

const CartContext = createContext({} as CartContextProps);

export function CartWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ISelectedProducts[]>(
    []
  );
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPurchase, setTotaltPurchase] = useState(0);

  const mapProducts = selectedProducts.map((item) => item.amount);
  console.log("map", mapProducts);

  useEffect(() => {
    console.log("entrou no effect");
    const totalAmounts = selectedProducts.map((item) => item.amount);
    if (totalAmounts.length > 0) {
      const sumAmount = totalAmounts.reduce(
        (acumulate, current) => acumulate + current
      );
      const allPrices = selectedProducts.map(
        (item) => item.amount * Number(item.price)
      );
      const sumAllProductsPice = allPrices.reduce(
        (acumulate, current) => acumulate + current
      );
      setTotalProducts(sumAmount);
      setTotaltPurchase(sumAllProductsPice);
    }
  }, [selectedProducts, totalProducts, isOpen, totalPurchase, mapProducts]);

  console.log("context: ", selectedProducts);
  console.log("total: ", totalPurchase, totalProducts);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedProducts,
        setSelectedProducts,
        totalProducts,
        totalPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
