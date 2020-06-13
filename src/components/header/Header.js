import React from 'react';

import Menu from './Menu';
import SearchBar from './SearchBar';
import ProfileFeatures from './ProfileFeatures';

const Header = () => {
  return (
    <nav className="nav">
      <Menu />
      <SearchBar />
      <ProfileFeatures />
    </nav>
  );
};

export default Header;
