import React from 'react';
const LibrarySong = ({song,setSongs, songs, setCurrentSong, audioRef, isPlaying}) => {

    const songSelectHandel = async () => {
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
        await setSongs(newSongs)
        if(isPlaying) audioRef.current.play()
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