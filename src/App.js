import React, {useState, useRef} from 'react';

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
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
})


const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration
  setSongInfo({...songInfo, currentTime : current, duration})
}


  const audioRef = useRef(null);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      currentSong={currentSong} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying} 
      audioRef={audioRef} 
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

    </div>
  );
}

export default App;
