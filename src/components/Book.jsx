import React from 'react';

function Book({ title, author }) {
  return (
    <span>
      {title} by {author}
    </span>
  );
}

export default Book;
