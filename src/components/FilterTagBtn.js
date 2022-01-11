import React from 'react';
import { FilterTagBtnStyle, FilterTagStyles } from './styles/Explorer.style';

function FilterTagBtn(props) {
  return (
    <FilterTagStyles>
      <FilterTagBtnStyle>{props.btnName}</FilterTagBtnStyle>
    </FilterTagStyles>
  );
}

export default FilterTagBtn;
