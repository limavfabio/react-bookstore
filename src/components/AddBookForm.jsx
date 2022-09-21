import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function postBook(e) {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        item_id: uuidv4(),
      })
    );
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={postBook}>
      <h2>Add a book</h2>
      <input
        placeholder="Book Title"
        type="text"
        name="title"
        value={title}
        onInput={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Author Name"
        type="text"
        name="author"
        value={author}
        onInput={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
