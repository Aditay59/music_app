import { useState } from 'react';
import '../styles/globalStyles.css';
import apiClient from '../Spotify/Spotify';
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../styles/search.css';

const Search = () => {

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const navigate = useNavigate();

  const playSong = (id) => {
    navigate('/player', {state: {id: id, isPlaylist: false}});
  }
  
  const handleSearch = (e) => {
    if(e.key === "Enter") {
      console.log(searchText);
      apiClient.get(`/search?q=${searchText}&type=track`).then (res =>{
        console.log(res.data.tracks.items);
        setSearchResult(res.data.tracks.items);
      })
    }
  }

  return (
    <div className='screen-container'>
      <div className='search-container'>
     
      <h1 className='screen-title'>Search Here</h1>
     
      <div className='search-bar'>
        <input size={26} type='text' value={searchText} placeholder='What do you want to listen to?' onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{handleSearch(e)}} />
      </div>
      </div>

      <div className='result-wrapper'>
        {
          searchResult? searchResult?.map((track,index)=>(
            <div key={index} className='song-container' onClick={()=>{playSong(track.id)}}>
              <img className='song-img' src={track?.album?.images[0]?.url} alt='poster-art' height={150} width={150} />
              <p className='music-title' > {track?.name} </p>
              <p className='music-subtitle' > {
                track?.artists?.map((item,index)=>(
                  <span key={index}> {item?.name} </span>
                ))
                } </p>
                <p className='release_date' > {track?.album?.release_date} </p>

                <div className='overlay-play'>
                <IconContext.Provider value={{size: "80px", color: '#fff'}}>
                <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
                
              </div>
          )): null
        }
      </div>
    
    </div>
  )
}

export default Search;