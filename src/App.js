import React, {useState} from 'react';

//importing components
import Player from './componens/player';
import Song from './componens/Song';
import './styles/app.scss'


function App() {
  //state
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
