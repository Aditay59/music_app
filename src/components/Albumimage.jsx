import '../styles/albumImage.css';

const Albumimage = ({url}) => {

  return (
    <>
    <div className="albumImage">
        <img src={url} alt="albumImage" className="albumImage" />
        <div className="albumImage-shadow">
            <img src={url} alt="albumImage" className="albumImage-shadow" />
        </div>
    </div>
    </>
  )
}

export default Albumimage