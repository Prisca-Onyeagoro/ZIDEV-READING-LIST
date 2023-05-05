import React, { useContext } from 'react';
import { Bookcontext } from '../Context/Bookcontext';

const Navbar = () => {
  const { books } = useContext(Bookcontext);
  return (
    <div className="navbar">
      <h1>ZIDEV READING LIST</h1>
      <p>You currently have {books.length} books to read</p>
    </div>
  );
};

export default Navbar;
