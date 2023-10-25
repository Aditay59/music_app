import '../styles/waveanimation.css';
import PropTypes from 'prop-types';

const WaveAnimation = ({isPlaying}) => {

    const waveClass = isPlaying ? "box active" : "box";

  return (
    <div className='box-container'>
        <div className={`${waveClass} box1`}></div>
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
    </div>
  )
}

WaveAnimation.propTypes = {
    isPlaying: PropTypes.bool.isRequired
  };

export default WaveAnimation;