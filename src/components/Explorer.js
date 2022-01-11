import React from 'react';
import ExplorerArtworks from './ExplorerArtworks';
import { ExplorerStyles } from './styles/Explorer.style';

export default function Explorer() {
  return (
    <>
      <ExplorerStyles>
        <ExplorerArtworks />
      </ExplorerStyles>
    </>
  );
}
