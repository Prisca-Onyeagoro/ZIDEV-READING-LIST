import React, { useContext, useState } from 'react';
import { Bookcontext } from '../Context/Bookcontext';
import { ADD_BOOK } from '../Actions/BookAction';

const Bookform = () => {
  const { dispatch } = useContext(Bookcontext);
  const [title, setTitle] = useState('Title of Book');
  const [author, setAuthor] = useState('Author of Book');
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_BOOK, book: { title, author } });
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Addbook" />
      </form>
    </div>
  );
};

export default Bookform;
