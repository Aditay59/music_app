
import '../styles/widgetentry.css';

const WidgetEntry = ({title, subtitle, image}) => {
  return (
    <div className="entry-body">
        <img src={image} alt={title} className="entry-img" />
        <div className="entry-right-body">
            <p className="entry-title"> {title} </p>
            <p className="entry-subtitle"> {subtitle} </p>
        </div>
    </div>
  )
}

export default WidgetEntry;