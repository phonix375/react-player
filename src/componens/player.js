import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong,setCurrentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs}) => {
 
    //state declaration

    // event handlers
    const dragEventHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false);
        }else{
            audioRef.current.play();
            setIsPlaying(true);

        }
        
    }
    const skipTrackHandler = (direction) => {
        console.log('goo')
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
         if(direction === 'skip-forward'){
             setCurrentSong(songs[(currentIndex + 1) % songs.length])
         }else{
             if((currentIndex - 1) % songs.length === - 1){
                setCurrentSong(songs[songs.length - 1])
             }else{
                setCurrentSong(songs[(currentIndex - 1) % songs.length])
             }
        }
    }

    //functions
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return(
        <div className="player">
            <div className="time-control">
               <p>{getTime(songInfo.currentTime)}</p> 
               <input min={0} max={songInfo.duration ||  0} value={songInfo.currentTime} type="range" onChange={dragEventHandler} />
               <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleDoubleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause : faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleDoubleRight}></FontAwesomeIcon>
        </div>
        </div>
    )
};

export default Player;