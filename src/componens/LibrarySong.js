import React from 'react';

const LibrarySong = ({song,setSongs, songs, setCurrentSong, audioRef, isPlaying}) => {

    const songSelectHandel = () => {
        setCurrentSong(song);
        //add active state
        const newSongs = songs.map((item) => {
            if(item.id === song.id){
                return{
                    ...item,
                    active:true
                }
            }else{
                return{
                    ...item,
                    active:false
                }
            }
        })

        setSongs(newSongs)

        
        //check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
                playPromise.then((audio) => {
                    audioRef.current.play();  
                })
            }
            audioRef.current.play()
        }
        
        
    
    return(
        <div onClick={songSelectHandel} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
        </div>
    )
};

export default LibrarySong;