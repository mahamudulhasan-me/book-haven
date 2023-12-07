import { Dispatch } from "react";
export {};

declare global {
  interface bookType {
    id: string;
    title: string;
    description: string;
    author: string;
    cover: string;
    genre: string;
    pages: number;
    isRented: boolean;
    stock: number;
    rentPrice: number;
    sellPrice: number;
    sold: number;
    ISBN: string; // Change the type to string
  }

  interface CartProviderType {
    cart: bookType[] | null;
    setCart: Dispatch<React.SetStateAction<bookType[] | null>>;
  }
}
