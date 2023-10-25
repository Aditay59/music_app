
import '../styles/globalStyles.css';
import APIKit from '../Spotify/Spotify';
import { useEffect, useState } from 'react';
import '../styles/library.css';
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router';

const Library = () => {

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then((response)=>{
      setPlaylists(response.data.items);
    })
  },[])

  const navigate = useNavigate();

  const playPlaylist = (id) =>{
    navigate('/player', {state: {id: id, isPlaylist: true}});
  }

  return (
    <div className="screen-container">
      <div className='library-body'>
      {playlists?.map((playlist,index)=>(
        <div key={index} className='playlist-card' onClick={()=>{playPlaylist(playlist.id)}}>
            <img src={playlist.images[0].url} alt='playlist-art' className='playlist-img' />
            <p className='playlist-title'>{playlist.name} </p> 
            <p className='playlist-subtitle'> {playlist.tracks.total} Songs </p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{ size: "80px", color: "#fff"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
              </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Library;