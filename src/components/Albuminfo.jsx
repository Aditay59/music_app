import { useLocation } from 'react-router-dom';
import '../styles/albumInfo.css';

const Albuminfo = ({album, total}) => {
    console.log(total);

    const { state } = useLocation();

    var name;
    var type;
    var release;
    var total_tracks;
    const artists = [];

    if(state.isPlaylist===true) {
        name = album?.name;
        type = album?.album_type;
        release = album?.release_date;
        total_tracks = album?.total_tracks;
        album?.artists?.forEach((ele)=>{
            artists.push(ele.name); 
        });
    } else {
        name = total[0]?.album?.name;
        type = total[0]?.album?.album_type;
        release = total[0]?.album?.release_date;
        total_tracks = total[0]?.album?.total_tracks;
        total[0]?.album?.artists?.forEach((ele)=>{
            artists.push(ele.name);
        })
    }


    


  return (
    <div className="albumInfo-card">
        <div className="albumName-container">
            <marquee scrollamount={4}> <p>{name + " - " + artists?.join(", ")}</p> </marquee>
        </div>
        <div className="albumInfo">
            <p>{`${name} is an ${type} by ${artists.join(", ")} with ${total_tracks} track(s).`}</p>
        </div>
        <div className="album-release">
            <p>Release Date: {release} </p>
        </div>
    </div>
  )
}

export default Albuminfo;