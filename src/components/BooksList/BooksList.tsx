import React, { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import "./BooksList.css";

type Props = {
  books: Book[];
  onDeleteBook: (id: string) => void;
};

const BooksList: FC<Props> = ({ books, onDeleteBook }) => {
  const handleDeleteBook = (id: string) => {
    onDeleteBook(id);
  };

  return (
    <ul className="books-list">
      {books.map((book: Book) => (
        <li key={book.id} className="book-item">
          {book.title} by {book.author}, ${book.price}
          <button onClick={() => handleDeleteBook(book.id)}>Delete</button>{" "}
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
