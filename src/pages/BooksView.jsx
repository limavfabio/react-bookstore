import React from 'react';
import Booklist from '../components/Booklist';
import AddBookForm from '../components/AddBookForm';

function BooksView() {
  // return booklist and addbookform
  return (
    <div>
      <Booklist />
      <AddBookForm />
    </div>
  );
}

export default BooksView;
