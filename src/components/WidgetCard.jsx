import { IconContext } from 'react-icons';
import '../styles/widgetscard.css';
import WidgetEntry from './WidgetEntry';
import { FiChevronRight } from 'react-icons/fi';

const WidgetCard = ({title,similar, featured, newRelease }) => {
  return (
    <div className='widgetcard-body'>
        <p className='widget-title'> {title} </p>
        {
            similar ? 
            similar?.map((artist, index) => (
                <WidgetEntry 
                title={artist?.name}
                subtitle={artist?.followers?.total + " Followers"}
                image={artist?.images[2]?.url}
                key={index}
                />
            ))
            : featured ?
            featured?.map((playlist, index)=>(
                <WidgetEntry
                title={playlist?.name}
                subtitle={playlist?.tracks?.total + "Songs"}
                image={playlist?.images[0]?.url}
                key={index}
                 />
            )) 
            :newRelease ?
            newRelease?.map((album, index)=>(
                <WidgetEntry 
                title={album?.name}
                subtitle={album?.artists[0]?.name}
                image={album?.images[2]?.url}
                key={index}
                />
            )) : null}
            
            <div className='widget-fade'>
                <div className='fade-btn'>
                    <IconContext.Provider value={{size: "30px", color: "#c4d0e3"}}>
                        <FiChevronRight />
                    </IconContext.Provider>
                </div>
            </div>
    </div>
  )
}

export default WidgetCard;