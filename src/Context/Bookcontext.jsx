import React, { createContext, useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import BookReducers from '../Reducers/BookReducers';

export const Bookcontext = createContext();

const Bookcontextprovider = (props) => {
  const [books, dispatch] = useReducer(BookReducers, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <Bookcontext.Provider value={{ books, dispatch }}>
      {props.children}
    </Bookcontext.Provider>
  );
};

export default Bookcontextprovider;
