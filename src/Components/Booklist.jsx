import React, { useContext } from 'react';
import Bookdetails from './Bookdetails';
import { Bookcontext } from '../Context/Bookcontext';

const Booklist = () => {
  const { books } = useContext(Bookcontext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <Bookdetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <h1 className="empty">No books to read!!!</h1>
  );
};

export default Booklist;
