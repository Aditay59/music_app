import { useLocation } from 'react-router-dom';
import '../styles/queue.css';

const Queue = ({tracks, setCurrentIndex}) => {

  const { state } = useLocation();
  const isPlaylist = state?.isPlaylist === true;

  return (
    <div className='queue-container'>
      <div className='queue'>
        <p className='upNext'>Up Next</p>
        <div className='queue-list'>
         {
          isPlaylist ? (
            tracks?.map((track,index)=>(
              <div key={index} className='queue-item' onClick={()=>{setCurrentIndex(index)}}>
                <p className='trackName'> {track?.track.name} </p>
                <p>0:30</p>
                </div>
            ))
          ) : (
            <div className='queue-item'>
              <p className='trackName'> {tracks[0]?.name}</p>
              <p>0:30</p>
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default Queue;


/**
 *  <div className='queue-list'>
          {
            location.state?.isPlaylist?

            tracks?.map((track,index) =>(
              <div key={index} className='queue-item' onClick={()=>{setCurrentIndex(index)}}>
                <p className='trackName'> {track?.track.name} </p>
                <p>0:30</p>
                </div>
            ))
            :
            <div  className='queue-item'>
                <p className='trackName'> {currentTrack?.name} </p>
                <p>0:30</p>
                </div>
          }
        </div>
 */