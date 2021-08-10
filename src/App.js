import React, {useState} from 'react';

//importing components
import Player from './componens/player';
import Song from './componens/Song';
import './styles/app.scss'
import Library from './componens/Library';

import data from './data'


function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong , setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library songs={songs}/>
    </div>
  );
}

export default App;
