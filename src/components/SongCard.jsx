import '../styles/songcard.css';
import Albumimage from './Albumimage';
import Albuminfo from './Albuminfo';

const SongCard = ({album}) => {
  return (
    <div className='songcard-body'> 
    <Albumimage url={album?.images[0]?.url} />
    <Albuminfo album={album} />
    </div>
  )
}

export default SongCard;
