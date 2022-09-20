import React from 'react';

function AddBookForm() {
  return (
    <form>
      <input type="text" name="title" id="title" />
      <input type="text" name="author" id="author" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
