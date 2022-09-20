import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <Book title={book.title} author={book.author} />
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
