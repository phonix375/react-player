import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong, isPlaying,setIsPlaying}) => {
    const audioRef = useRef(null);
    //state declaration
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

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
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime : current, duration})
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
               <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragEventHandler} />
               <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleDoubleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause : faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleDoubleRight}></FontAwesomeIcon>
        </div>
        <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;