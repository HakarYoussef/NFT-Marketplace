import React, { useState } from 'react';
import { FilterBtnStyles, FilterIcon } from './styles/Explorer.style';
import FilterList from './FilterList';
import { motion } from 'framer-motion';

function FilterBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FilterBtnStyles onClick={() => setOpen(!open)}>
        <FilterIcon />
        Filter
      </FilterBtnStyles>
      {open && (
        <motion.div
          animate={{
            y: 15,
            zIndex: 10,
          }}
        >
          <FilterList></FilterList>{' '}
        </motion.div>
      )}
    </>
  );
}

export default FilterBtn;
