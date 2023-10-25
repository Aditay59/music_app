import { useEffect, useState } from 'react';
import '../styles/widgets.css';
import apiClient from '../Spotify/Spotify';
import WidgetCard from './WidgetCard';

const Widgets = ({artistId}) => {

    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);

    // const id = artistId?.artists[0]?.id;

    useEffect(()=>{
        if(artistId) {
            apiClient.get(`/artists/${artistId}/related-artists`)
        .then(res =>{
            const a = res.data?.artists?.slice(0,3);
            setSimilar(a);
        })
        .catch(err => console.error(err)); 
        
        apiClient.get(`/browse/featured-playlists`)
        .then(res =>{
            const a = res.data?.playlists?.items?.slice(0,3);
            setFeatured(a);
        })
        .catch(err => console.error(err));
        
        apiClient.get(`/browse/new-releases`)
        .then(res =>{
            const a = res.data?.albums?.items?.slice(0,3);
            setNewRelease(a);
        })
        .catch(err => console.error(err));
        }
    },[artistId]);



  return (
    <div className='widget-body'> 
    <WidgetCard title= "Similar Artists" similar={similar} />
    <WidgetCard title= "Made For You" featured={featured} />
    <WidgetCard title= "New Releases" newRelease={newRelease} />
    </div>
  )
}

export default Widgets;