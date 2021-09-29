import { NavLink } from "react-router-dom";
import style from './DirectMessageItem.scoped.css';
import Image from '../../Image/Image';

function DirectMessageItem ({ item, showCloseIcon,loggedInUserId }) {
    const imgStyle = { borderRadius: '4px' }

    return (
        <NavLink 
            onMouseEnter={showCloseIcon} 
            to={`../messages/${item.id}`} 
            exact activeClassName={style.isActive} 
            className="direct-message-item">
            <Image 
                source={item.image} 
                width={20}
                customStyle={imgStyle}
            /> {item.name}
             <span className="guest-label">{loggedInUserId === item.id ? 'you guest' : 'guest'}</span>   
        </NavLink>
    )
}

export default DirectMessageItem;
