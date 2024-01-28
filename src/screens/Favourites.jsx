import { useEffect, useState } from 'react';
import '../styles/globalStyles.css';
import apiClient from '../Spotify/Spotify';
import '../styles/favourites.css';
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {

  const [liked, setLiked] = useState(null);
  // const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() =>{
    apiClient.get('me/tracks').then(res =>{
      // console.log(res.data.items);
      setLiked(res.data.items);
    })
  },[])

  const navigate = useNavigate();

  const playPlaylist = (id) =>{
    navigate('/player', {state: {id: id, isPlaylist: false}});
  }

  // let artists = [];

  return (
    <div className='screen-container'>
      <div className='title-container'>
      <h1 className='screen-title'>Liked Songs</h1>
      </div>
      <div className='songs-wrapper'>
        {
          liked? liked?.map((track,index)=>(
            <div key={index} className='song-container' onClick={()=>{playPlaylist(track.track.id)}}>
              <img className='song-img' src={track?.track?.album?.images[0]?.url} alt='poster art' />
              <p className='music-title'> {track?.track.name} </p>
              <p className='music-subtitle'>
                {
                  track?.track?.artists?.map((item, index)=>(
                    <span key={index}>
                      {item.name}  
                      {index !== track.track.artists.length - 1 && ' | '}
                    </span>
                  ))
                }
              </p>
              <p className='release_date'> {track?.track?.album?.release_date} </p>
              <div className='overlay-play'>
                <IconContext.Provider value={{size: "80px", color: '#fff'}}>
                <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
              </div>
          )): <div><h1>Nothing to Show Here</h1></div>
        }
      </div>
    </div>
  )
}

export default Favourites;