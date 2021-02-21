import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) =>(
    <input 
    className='search'
    type='seacrh' placeholder={placeholder}  onChange={handleChange}/>

);