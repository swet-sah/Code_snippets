import React from 'react';
import { Container } from 'react-bootstrap';
import { AlumniProvider } from './AlumniContext';
import AlumniTable from './AlumniTable';
import SearchBar from './SearchBar';
import AlumniPagination from './AlumniPagination';
import Notification from './Notification';

const AlumniManagement = () => {
  return (
    <AlumniProvider>
      <Container className="my-4">
        <h2 className="text-center mb-3">Alumni Management</h2>
        <SearchBar />
        <Notification />
        <AlumniTable />
        <AlumniPagination />
      </Container>
    </AlumniProvider>
  );
};

export default AlumniManagement;
