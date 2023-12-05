import React, { useState, useContext } from 'react';
import { NewsContext } from './NewsContext';

const Filter = () => {
  const { handleFilter } = useContext(NewsContext);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === '') {
      handleFilter('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleFilter(value);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="search"
        value={value}
         onChange={handleChange}
        onKeyUp={handleKeyUp}
        className="form-control"
        placeholder="Filter by category or content..."
      />
    </div>
  );
};

export default Filter;
