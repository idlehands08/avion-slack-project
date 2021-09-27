import React, { useState } from 'react'; 

import { FiSearch } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import SearchForm from './component/SearchForm';
import './SearchBar.scoped.css'

function SearchBar ({ placeholder}) {
    const [isToggled, setIsToggled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true); 
    } 

    return (
        <div className="container-searchBar">
            <button onClick={handleClick}>
                {placeholder}
                {!isToggled ? <FiSearch /> : <GrClose /> }
            </button>
            {isClicked && <SearchForm handleClick={handleClick} />}
        </div>
    )
}

export default SearchBar
