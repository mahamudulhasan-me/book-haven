import { getAllBooks } from "../lib/fake-data.ts";
import { bookType } from "../lib/type.ts";
import BookCard from "./ui/BookCard";

const StorePage = () => {
  const books: bookType[] = getAllBooks();
  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book: bookType) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default StorePage;
