import React, { useState } from 'react'; 
import './SearchBar.scoped.css'
import { FiSearch } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

function SearchBar ({ placeholder, handleChange}) {
    const [isToggled, setIsToggled] = useState(false);
    
    return (
        <button>
            {placeholder}
            {!isToggled ? <FiSearch /> : <GrClose /> }
        </button>
    )
}

export default SearchBar
