import { NavLink } from "react-router-dom";
import './SearchListItem.scoped.css';

function SearchListItem ({ item }) {
    
    return ( 
        <li><NavLink className="nav-link" to='/'> {item}</NavLink></li>
    )
}

export default SearchListItem;
