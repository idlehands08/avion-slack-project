import { NavLink } from "react-router-dom";
import { FaRegUser } from 'react-icons/fa';
import style from './DirectMessageItem.scoped.css';

function DirectMessageItem ({ item, showCloseIcon, loggedInUserId }) {
    return (
        <NavLink 
            onMouseEnter={showCloseIcon} 
            to={`recipient/1`} 
            exact activeClassName={style.isActive} 
            className="direct-message-item">
            <img className='avatar' src={item.image}/>
            {item.name} 
            <span className="guest-label">{loggedInUserId === item.id ? 'you guest' : 'guest'}</span>
        </NavLink>
    )
}

export default DirectMessageItem;
