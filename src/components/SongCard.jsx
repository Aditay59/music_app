import { useLocation } from 'react-router-dom';
import '../styles/songcard.css';
import Albumimage from './Albumimage';
import Albuminfo from './Albuminfo';

const SongCard = ({album, total}) => {

  const { state } = useLocation();

    // console.log(album);
    // console.log(total);
    var src;

    if(state?.isPlaylist===true) {
      src = album?.images[0]?.url;
    } else {
      src = total[0]?.album?.images[0]?.url;
    }

    const isPlaylist = state?.isPlaylist === true;

   

    return (
      <div className='songcard-body'> 
      <Albumimage url={src} />
      <Albuminfo album={album} total={total} />
    </div>
  )
}

export default SongCard;
