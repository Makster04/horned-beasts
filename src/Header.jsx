import React from 'react';

const Header = ({ onSearchQueryChange }) => {
  return (
    <header>
      <h1>My Gallery</h1>
      <input
        type="text"
        placeholder="Search by title or keyword..."
        onChange={onSearchQueryChange}
      />
    </header>
  );
};

export default Header;