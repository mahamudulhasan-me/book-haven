"use client";
import { ReactNode, createContext, useState } from "react";
import { CartProviderType, bookType } from "../lib/type";

export const CartProvider = createContext<CartProviderType | null>(null);

const CartProviderData = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<bookType[] | null>([]);

  console.log(cart);

  const value: CartProviderType = {
    cart,
    setCart,
  };
  return (
    <CartProvider.Provider value={value}>{children}</CartProvider.Provider>
  );
};

export default CartProviderData;
