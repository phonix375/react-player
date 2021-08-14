import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import {playAudio} from "../util"


const Player = ({currentSong,setCurrentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setSongs, song}) => {
 
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
    // use effect
    useEffect(() => {
        const newSongs = songs.map((item) => {
            if(item.id === currentSong.id){
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
        playAudio(isPlaying, audioRef)
    },[currentSong])

    //functions
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return(
        <div className="player">
            <div className="time-control">
               <p>{songInfo.duration ? getTime(songInfo.currentTime) : '0:00'}</p> 
               <div className="track">
               <input min={0} max={songInfo.duration ||  0} value={songInfo.currentTime} type="range" onChange={dragEventHandler} />
               <div className="animate-track"></div>
               </div>
               <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
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