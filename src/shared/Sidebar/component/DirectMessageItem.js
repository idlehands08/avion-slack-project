import { NavLink } from "react-router-dom";
import style from './DirectMessageItem.scoped.css';
import Image from '../../Image/Image';

function DirectMessageItem ({ item, showCloseIcon }) {
    const imgStyle = { borderRadius: '4px' }

    return (
        <NavLink 
            onMouseEnter={showCloseIcon} 
            to={`recipient/1`} 
            exact activeClassName={style.isActive} 
            className="direct-message-item">
            <Image 
                source={item.image} 
                width={20}
                customStyle={imgStyle}
            /> {item.name}
        </NavLink>
    )
}

export default DirectMessageItem;
