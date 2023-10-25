import { useLocation } from 'react-router';
import '../styles/player.css';
import { useEffect, useState } from 'react';
import apiClient from '../Spotify/Spotify';
import SongCard from '../components/SongCard';
import Queue from '../components/Queue';
import AudioPlayer from '../components/AudioPlayer';
import Widgets from '../components/Widgets';

const Player = () => {

  const[tracks,setTracks] = useState([]);
  const[currentTrack,setCurrentTrack] = useState(null);
  const[currentindex,setCurrentIndex] = useState(0); //handles next and previous tracks

  const location = useLocation();


  useEffect(() => {
    if (location.state) {
      if (location.state.isPlaylist) {
        apiClient.get(`playlists/${location?.state?.id}/tracks`)
          .then(res => {
            setTracks(res.data.items);
            setCurrentTrack(res.data.items[0]?.track);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        apiClient.get(`tracks/${location?.state?.id}`)
          .then(res => {
            setTracks([res.data]);
            setCurrentTrack(res.data);
            // console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }, [location.state]);
  


  // useEffect(()=>{
  //   if(location.state) {
  //     apiClient.get("playlists/"+location.state?.id+"/tracks")
  //     .then(res=>{
  //       setTracks(res.data.items);
  //       setCurrentTrack(res?.data.items[0]?.track);
  //     });
  //   }
  // },[location.state])

  useEffect(() =>{
    setCurrentTrack(tracks[currentindex]?.track);
  },[currentindex,tracks])



  return (
    <div className='screen-container flex'>
     
      <div className='left-player-body'>
        <AudioPlayer 
        currentTrack={currentTrack} 
        total={tracks}
        currentIndex={currentindex} 
        setCurrentIndex={setCurrentIndex} />
        <Widgets artistId={currentTrack?.album?.artists[0]?.id} />

      </div>
      <div className='right-player-body'>
        <SongCard album={currentTrack?.album} total={tracks} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  )
}

export default Player;