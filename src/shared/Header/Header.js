import SearchBar from '../SearchBar/SearchBar';
import { BiTime } from 'react-icons/bi';
import { FiHelpCircle } from 'react-icons/fi';
import './Header.css';

function Header () {
    return (
    <header>
        < BiTime className = 'bi-history-icon' />
        <SearchBar placeholder={'Search Avion School'}/>
        <FiHelpCircle className="help-icon" />
   </header>
    )
}

export default Header;
