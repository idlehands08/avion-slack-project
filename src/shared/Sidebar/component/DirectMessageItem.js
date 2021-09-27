import { NavLink } from "react-router-dom";
import { FaRegUser } from 'react-icons/fa';
import style from './DirectMessageItem.scoped.css';

function DirectMessageItem ({ item, showCloseIcon }) {
    return (
        <NavLink 
            onMouseEnter={showCloseIcon} 
            to={`recipient/1`} 
            exact activeClassName={style.isActive} 
            className="direct-message-item">
            <FaRegUser /> {item}
        </NavLink>
    )
}

export default DirectMessageItem;
