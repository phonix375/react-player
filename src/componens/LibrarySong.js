import React from 'react';

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying}) => {

    const songSelectHandel = () => {
        setCurrentSong(song);
        //check if the song is playing
        console.log(isPlaying, 'this is isPlaying')
        if(isPlaying){
            const playPromise = audioRef.current.play();
                playPromise.then((audio) => {
                    audioRef.current.play();  
                })
            }
            audioRef.current.play()
        }
        
        
    
    return(
        <div onClick={songSelectHandel} className="library-song">
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
        </div>
    )
};

export default LibrarySong;