import React from 'react';
import { ExSearchIcon, ExSearchStyles } from './styles/Explorer.style';

function ExplorerSearch({ handleSearch }) {
  return (
    <ExSearchStyles>
      <ExSearchIcon />
      <input onChange={handleSearch} type="text" placeholder="Search Tokens" />
    </ExSearchStyles>
  );
}

export default ExplorerSearch;
