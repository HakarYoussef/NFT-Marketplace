import React from 'react';
import { SearchStyles, SearchIcon } from './styles/Navbar.styles';

function NavbarSearch() {
  return (
    <SearchStyles>
      <SearchIcon />
      <input type="text" placeholder="Search Collections, Users & NFTs" />
    </SearchStyles>
  );
}

export default NavbarSearch;
