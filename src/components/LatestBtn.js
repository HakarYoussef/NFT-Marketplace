import { motion } from 'framer-motion';
import React, { useState, useEffect, useMemo } from 'react';
import LatestDropDown from './LatestDropDown';
import { LatestBtnStyles } from './styles/Explorer.style';
import { LatestIconDown } from './styles/Explorer.style';
import Select from 'react-select';
import { StyledReactSelect } from './styles/Explorer.style';

function LatestBtn({ handleSort, sortOrder }) {
  const [open, setOpen] = useState(false);
  const [options, setOpions] = useState([]);

  useEffect(() => {
    setOpions([
      { value: 'asc', label: 'Price: Low to High' },
      { value: 'desc', label: 'Price: High to Low' },
    ]);
  }, []);

  const SelectCustomStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted #F1F1F2',
      color: state.selectProps.menuColor,
      padding: 10,
      boxShadow: 'none',
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #F1F1F2',
      color: state.isSelected ? 'LightSeaGreen' : 'gray',
      backgroundColor: 'none',
      padding: 20,
    }),

    control: (provided, state) => ({
      ...provided,
      border: 'solid 2px #F1F1F2',
      marginLeft: '20px',
      width: '170px',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'none',
        boxShadow: ' 0 0 0 2px rgba(0, 183, 190, 0.2)',
        outlineColor: 'none',
      },
      '&:active': {
        borderColor: 'none',
        outlineColor: 'none',
      },
      '&:focus': {
        border: ' solid 2px #00b7be',
        outlineColor: 'none',
      },
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <StyledReactSelect
        classNamePrefix={'Select'}
        isSearchable={false}
        value={sortOrder}
        onChange={handleSort}
        options={options}
      />
    </>
  );
}

export default LatestBtn;
