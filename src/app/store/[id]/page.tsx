"use client";
import { getBookById } from "@/app/lib/fake-data";
import { CartProviderType, bookType } from "@/app/lib/type";
import { CartProvider } from "@/app/provider/CartProvider";
import Image from "next/image";
import { useContext } from "react";
import BuyBtn from "../ui/BuyBtn";

const SingleBookDetails = ({ params }: { params: { id: string } }) => {
  const { cart, setCart } = useContext(CartProvider) as CartProviderType;
  const id: string = params.id;

  // Check if book is found by id
  const book: bookType | undefined = getBookById(params.id);

  // Check if book is found before using its properties
  const { title, cover, author, description }: bookType = book || {
    title: "",
    cover: "",
    author: "",
    description: "",
  };

  const handleBuyBook = () => {
    // Check if cart is defined before spreading its contents
    setCart([...(cart || []), getBookById(id)]);
  };

  return (
    <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
      <Image src={cover} alt="" width={100} height={100}></Image>
      <article>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-4 dark:text-gray-400">{description}</p>
        <div className="flex items-center mt-8 space-x-4">
          <Image
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
            width={100}
            height={100}
          />
          <div>
            <h3 className="text-sm font-medium">{author}</h3>
            <time dateTime="2021-02-18" className="text-sm dark:text-gray-400">
              Feb 18th 2021
            </time>
          </div>
        </div>
      </article>
      <div className="flex justify-center gap-5 items-center mt-10">
        <BuyBtn onClick={handleBuyBook}>Buy Book</BuyBtn>
        <BuyBtn>Rent Book</BuyBtn>
      </div>
    </div>
  );
};

export default SingleBookDetails;
