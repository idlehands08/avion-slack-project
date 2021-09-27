import React, { useState } from 'react'; 

import { BiSearch } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import './SearchForm.scoped.css';
import SearchList from './SearchList';

function SearchForm({ handleClick }) {
    
    const [searchInput, setSearchInput] = useState('');
    
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
      <div className="container-searchForm flex-column">
          <div className="d-flex">
            <BiSearch className="search-icon icon"/>
             <input type='text' onChange={handleChange} placeholder="Search far and wide"></input>
             <GrClose className="close-icon icon" onClick={handleClick}/>
        </div>
        <SearchList searchInput={searchInput} />
      </div>
    )
}

export default SearchForm;
