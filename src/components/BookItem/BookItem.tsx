import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import "./BookItem.css";

type Props = {
  book: Book;
  onDeleteBook: (id: string) => void;
};

const BookItem: FC<Props> = ({ book, onDeleteBook }) => {
  const handleDeleteBook = (id: string) => {
    onDeleteBook(id);
  };

  return (
    <li className="book-item">
      {book.title} by {book.author}, ${book.price}
      <button onClick={() => handleDeleteBook(book.id)}>Delete</button>{" "}
    </li>
  );
};

export default BookItem;
