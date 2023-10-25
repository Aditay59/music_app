import '../styles/progresscircle.css';
import PropTypes from 'prop-types';

const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius - 20;
    const strokePct = ((100 - Math.round(percentage)) * circumference) / 100;
  
    return (
      <circle
        r={radius}
        cx="50%"
        cy="50%"
        fill="transparent"
        stroke={strokePct !== circumference ? color : ""}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap="round"
      ></circle>
    );
  };

const ProgressCircle = ({percentage, isPlaying, size, color, image}) => {
  return (
    <div className='progress-circle'>
        <svg width={size} height={size}>
            <g>
                <Circle strokeWidth={"0.4rem"} color={"#3B4F73"} size={size} />
                <Circle strokeWidth={"0.6rem"} color={color} size={size} percentage={percentage} />
            </g>
            <defs>
              <clipPath id='myCircle'>
                <circle 
                cx="50%"
                cy="50%"
                r={(size/2)-30}
                fill='#ffffff'
                />
              </clipPath>
              <clipPath id='myInnerCircle'>
                <circle 
                cx="50%"
                cy="50%"
                r={(size/2)-100}
                fill='#ffffff'
                 />
              </clipPath>
            </defs>
            <image 
            className={isPlaying? "active" : ""} 
            x={30} 
            y={30} 
            width={2*((size/2)-30)} 
            height={2*((size/2)-30)} 
            href='https://pngimg.com/uploads/vinyl/vinyl_PNG107.png'
            clipPath="url(#myCircle)"
            />
            <image 
            className={isPlaying? "active" : ""} 
            x={100} 
            y={100} 
            width={2*((size/2)-100)} 
            height={2*((size/2)-100)} 
            href={image}
            clipPath="url(#myInnerCircle)"
             />
        </svg>
    </div>
  )
}

ProgressCircle.protoTypes = {
    percentage: PropTypes.any.isRequired,
    isPlaying: PropTypes.any.isRequired,
    size: PropTypes.any.isRequired,
    color: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired
}

export default ProgressCircle;