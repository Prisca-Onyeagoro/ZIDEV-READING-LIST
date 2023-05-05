import React from 'react';
import Bookcontextprovider from './Context/Bookcontext';
import Navbar from './Components/Navbar';
import Booklist from './Components/Booklist';
import Bookform from './Components/Bookform';

const App = () => {
  return (
    <div className="App">
      <Bookcontextprovider>
        <Navbar />
        <Booklist />
        <Bookform />
      </Bookcontextprovider>
    </div>
  );
};

export default App;
