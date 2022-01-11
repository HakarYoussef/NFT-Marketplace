import React from 'react';
import FilterTagBtn from './FilterTagBtn';
import { FilterListStyle, TagStyle } from './styles/Explorer.style';

function FilterList() {
  return (
    <FilterListStyle>
      <p>CATEGORIES</p>
      <TagStyle>
        <FilterTagBtn btnName="Art" />
        <FilterTagBtn btnName="Collectibles" />
        <FilterTagBtn btnName="Photography" />
      </TagStyle>
      <p>NFT STATE</p>
      <TagStyle>
        <FilterTagBtn btnName="On Sale" />
        <FilterTagBtn btnName="On Auction" />
      </TagStyle>

      <p>PRICE RANGE</p>
      <TagStyle>
        <FilterTagBtn btnName="Easy Picks" />
        <FilterTagBtn btnName="10-100 Tez" />
        <FilterTagBtn btnName="100-1000 Tez" />
        <FilterTagBtn btnName="1000-10000 Tez" />
        <FilterTagBtn btnName="High Premium" />
      </TagStyle>

      <h5>Clear filters</h5>
    </FilterListStyle>
  );
}

export default FilterList;
