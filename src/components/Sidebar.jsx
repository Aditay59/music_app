import '../styles/sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt, FaSearch }  from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect, useState } from 'react';
import apiClient,{clearClientToken} from '../Spotify/Spotify';

// https://avatars.githubusercontent.com/u/5821883?v=4
const Sidebar = () => {

  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3tr9uzXD_2mogufMQ_kJ0zvMWdpa9V-ZmQ&usqp=CAU");

  useEffect(() =>{
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    })
  },[]);

  const handleSignOut = () =>{
    localStorage.removeItem('token');
    clearClientToken();
    window.location.href = '/';
  }

  return (
    <div className='sidebar-container'>
      <img src={image} alt='profile' className='profile-img' />
     
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Search" to="/search" icon={<FaSearch />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>

      <SidebarButton title="Sign Out"  handleSignOut={handleSignOut} icon={<FaSignOutAlt />} />

    </div>
  )
}

export default Sidebar;