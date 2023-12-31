import '../styles/audioplayer.css';
import ProgressCircle from './ProgressCircle';
// import PropTypes from 'prop-types';
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AudioPlayer = ({currentTrack,currentIndex, setCurrentIndex, total}) => {

  // const location = useLocation();
  const { state } = useLocation();
  const isPlaylist = state?.isPlaylist === true;

  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc;
  const audioRef = useRef(new Audio());
 
  const previewUrl = isPlaylist ? total[currentIndex]?.track.preview_url : total[0]?.preview_url;

  // audioSrc = total[currentIndex]?.track.preview_url;

  // const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();
  const isReady = useRef(false);
  const {duration} = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () =>{
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() =>{
      if(audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    },[1000])
  }


  useEffect(()=>{
    if(audioRef.current.src) {
      if(isPlaying && audioRef.current) {
        audioRef.current = new Audio(previewUrl);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if(isPlaying && audioRef.current) {
        audioRef.current = new Audio(previewUrl);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
    
  },[isPlaying]);

  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current = new Audio(previewUrl);
    
    setTrackProgress(audioRef.current.currentTime);

    if(isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  },[currentIndex])

  useEffect(()=>{
    return ()=>{
      audioRef.current.pause();
      clearInterval(intervalRef.current)
    }
  },[])

  const handleNext = () =>{
    if(currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  const handlePrev = () =>{
    if(currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const addZero = (n) =>{
    return n > 9 ? "" + n : "0" + n;
  }

    const artists = [];
    if(isPlaylist) {
      currentTrack?.album?.artists.forEach((artist)=>{
        artists.push(artist.name);
    })
    } else {
      total[0]?.album?.artists.forEach((artist)=>{
        artists.push(artist.name);
    })
    }
    

  return (
    <div className='player-body'>
        <div className='player-left-body'>
            <ProgressCircle 
            percentage={currentPercentage} 
            isPlaying={true}
            image={isPlaylist? currentTrack?.album?.images[0]?.url : total[0]?.album?.images[0].url}
            size={300}
            color="#c96850" 
            />
        </div>
        <div className='player-right-body'>
            <p className='song-title'> { isPlaylist? currentTrack?.name : total[0]?.name} </p>
            <p className='song-artist'> {artists.join(' | ')} </p>
            <div className='player-right-bottom'>
              <div className='song-duration'>
                <p className='duration'> 0:{addZero(Math.round(trackProgress))} </p>
                <WaveAnimation isPlaying={isPlaying} />
                <p className='duration'>0:30</p>
              </div>
              <Controls 
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              handleNext={handleNext}
              handlePrev={handlePrev}
              total={total}
              />
            </div>
        </div>
    </div>
  )
}

// AudioPlayer.propTypes = {
//     currentTrack: PropTypes.any.isRequired,
//     currentIndex:PropTypes.any.isRequired,
//     setCurrentIndex: PropTypes.any.isRequired,
//     total: PropTypes.any.isRequired,
//   };

export default AudioPlayer;