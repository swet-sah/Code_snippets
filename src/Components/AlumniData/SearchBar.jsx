import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AlumniContext } from './AlumniContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(AlumniContext);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search alumni..."
      value={searchQuery}
      onChange={handleSearch}
      className="mb-3"
    />
  );
};

export default SearchBar;
