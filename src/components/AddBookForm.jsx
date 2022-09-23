import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './AddBookForm.css';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  function postBook(e) {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category,
        item_id: uuidv4(),
      })
    );
    setTitle('');
    setAuthor('');
    setCategory('');
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
      <select
        className="categoryInput"
        name="list"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        required
      >
        <option value="">Category</option>
        <option value="Historical">Historical</option>
        <option value="Horror">Horror</option>
        <option value="Thriller">Thriller</option>
        <option value="Romance">Romance</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      {/* <input
        className="categoryInput"
        placeholder="Category"
        type="text"
        name="category"
        value={category}
        onInput={(e) => setCategory(e.target.value)}
        required
      /> */}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
