import { Link, useLocation } from "react-router-dom";
import '../styles/sidebarbutton.css';
import { IconContext } from 'react-icons';

const SidebarButton = ({title, to, icon, handleSignOut}) => {

    const location = useLocation();
    const isActive = location.pathname === to;

    const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={to}>
        <div className={btnClass} onClick={handleSignOut}>
            <IconContext.Provider value={{size:'24px', className:"btn-icon"}}>
            {icon}
            <p className="btn-title"> {title} </p>
            </IconContext.Provider>
        </div>
    </Link>
  )
}

export default SidebarButton;