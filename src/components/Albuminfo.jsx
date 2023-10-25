import '../styles/albumInfo.css';

const Albuminfo = ({album}) => {

    const artists = [];

    album?.artists?.forEach((ele)=>{
        artists.push(ele.name); 
    });


  return (
    <div className="albumInfo-card">
        <div className="albumName-container">
            <marquee scrollamount={4}> <p>{album?.name + " - " + artists?.join(", ")}</p> </marquee>
        </div>
        <div className="albumInfo">
            <p>{`${album?.name} is an ${album?.album_type} by ${artists.join(", ")} with ${album?.total_tracks} track(s).`}</p>
        </div>
        <div className="album-release">
            <p>Release Date: {album?.release_date} </p>
        </div>
    </div>
  )
}

export default Albuminfo;