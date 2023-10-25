import '../styles/queue.css';

const Queue = ({tracks, setCurrentIndex}) => {

  return (
    <div className='queue-container'>
      <div className='queue'>
        <p className='upNext'>Up Next</p>
        <div className='queue-list'>
          {
            tracks?.map((track,index) =>(
              <div key={index} className='queue-item' onClick={()=>{setCurrentIndex(index)}}>
                <p className='trackName'> {track?.track.name} </p>
                <p>0:30</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Queue;