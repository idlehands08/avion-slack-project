import React, { useState } from 'react'; 
import { NavLink } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import './SearchForm.scoped.css';

function SearchForm({ handleClick }) {
    const list = ['Apple', 'Banana', 'Cupcake', 'AFile', 'Bfile', 'Cfile', 'Android', 'Boozy', 'Cooper']
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
          <ul>
          {list.filter((item) => {
              if (searchInput === '') {
                    return item
              } else {
                    return item.toUpperCase().includes(searchInput.toUpperCase())
            }
          }).map((item) => {
              return (
                  <li><NavLink className="nav-link" to='/'  > {item} </NavLink></li>
              );
          })}
          </ul>
      </div>
    )
}

export default SearchForm;
