import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { timeInSeconds, formatTime } from "../../utils/playerComponent";

const Player = ( {
  songToPlay,
  previousRandomSongId,
  nextRandomSongId
} ) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(songToPlay.duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(isPlaying){
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); 
        progressBar.current.style.setProperty("--_progress", (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%");
      }  
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [isPlaying]);
  
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${previousRandomSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className="player__icon--play" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()} />
        
        <Link to={`/song/${nextRandomSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep}/>
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{songToPlay.duration}</p>
      </div>

      <audio 
        ref={audioPlayer}
        src={songToPlay.audio}></audio>
    </div>
  );
};

export default Player;
