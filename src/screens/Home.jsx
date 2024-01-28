import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './Library';
// import Feed from './Feed';
import Search from './Search';
import Player from './Player';
import Favourites from './Favourites';
import '../styles/Home.css';
import Sidebar from '../components/Sidebar';
import Login from '../auth/login';
import { useEffect, useState } from 'react';
import { setClientToken } from '../Spotify/Spotify';

const Home = () => {

  const [token, setToken] = useState("");

  useEffect(() =>{

    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if(!token && hash) {
      // const hash = window.location.hash;
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
    
  },[])
/**
* <Route path='/feed' element={<Feed />} /> 
* */ 
  return (
    !token ?
    <Login /> :
    <Router>
      <div className='main-body'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/search' element={<Search />} />
          <Route path='/player' element={<Player />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default Home