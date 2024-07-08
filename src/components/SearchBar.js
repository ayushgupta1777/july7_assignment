import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search Products" 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchBar;
