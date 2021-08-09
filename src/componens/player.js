import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
               <p>Start time</p> 
               <input type="range" />
               <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleDoubleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleDoubleRight}></FontAwesomeIcon>
        </div>
        </div>
    )
};

export default Player;