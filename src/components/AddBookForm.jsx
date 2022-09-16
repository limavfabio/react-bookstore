import React from 'react';

function AddBookForm() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
