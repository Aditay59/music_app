import { useEffect, useState } from 'react';
import '../styles/globalStyles.css';
import apiClient from '../Spotify/Spotify';
import { useNavigate } from 'react-router';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import '../styles/feed.css';

const Feed = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    /*browse/new-releases*/ 
    //me/top/{type}
    apiClient.get("/recommendations").then((response)=>{
      setData(response.data.items);
      console.log(response.data.items);
    })
  },[])

  const navigate = useNavigate();

  const playPlaylist = (id) =>{
    navigate('/player', {state: {id: id, isPlaylist: true}});
  }
  
  return (
    <div className='screen-container'>
      
      <div className='feed-title'>
        <h1>Feed</h1>
      </div>

      <div className='feed-title'>
        <h3>Saved Playlists</h3>
      </div>

      <div className='feed-wrapper'>
        {
          data&& data.map((playlist, index)=>(
            <div key={index} className='saved-playlist' onClick={()=>{playPlaylist(playlist.album.id)}}>
              <img className='savedplay-img' src={playlist.album.images[0].url} alt='playlist-poster'/>
              <p className='savedplay-title' > {playlist.album.name} </p>
              <p className='playlist-subtitle'> {playlist.album.tracks.total} Songs </p>
              
              <div className='feed-overlay'>
              <IconContext.Provider value={{ size: "80px", color: "#fff"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Feed;