import { bookType } from "@/app/lib/type";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: bookType }) => {
  const { id, title, cover, author, description } = book;
  console.log(book);
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <Image
        src={cover}
        width={100}
        height={100}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="dark:text-gray-100">{description.slice(0, 100)}</p>
        </div>
        <Link
          href={`/store/${id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
