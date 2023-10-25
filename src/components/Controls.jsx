import '../styles/controls.css';
import { IconContext } from 'react-icons';
import { IoMdSkipBackward, IoMdSkipForward, IoMdPlay, IoMdPause } from 'react-icons/io';

const Controls = ({isPlaying, setIsPlaying, handleNext, handlePrev, }) => {
  return (
    <IconContext.Provider value={{size: "35px", color: "#c4d0e6"}}>
        <div className='controls-wrapper'>
            <div className='action-btn' onClick={handlePrev}>
                <IoMdSkipBackward />
            </div>
            <div className={isPlaying ? "play-pause-btn active" : "play-pause-btn"} onClick={()=>setIsPlaying(!isPlaying)}>
                {isPlaying ? <IoMdPause /> :<IoMdPlay />}
            </div>
            <div className='action-btn' onClick={handleNext}>
                <IoMdSkipForward />
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default Controls;