import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Songform from './Songform';

const Songslists = () => {
  const [songs, setSongs] = useState([
  
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }]);
  };
  return (
    <div className="songlist">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <Songform addSong={addSong} />
    </div>
  );
};
export default Songslists;
