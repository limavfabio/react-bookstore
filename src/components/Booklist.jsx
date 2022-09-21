import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  });

  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <Book title={book.title} author={book.author} id={book.id} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
