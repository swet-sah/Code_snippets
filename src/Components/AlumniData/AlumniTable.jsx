import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AlumniContext } from './AlumniContext';

const AlumniTable = () => {
  const { filteredAlumni } = useContext(AlumniContext);

  return (
    <Table responsive striped bordered>
      <thead className="bg-primary text-white">
        <tr>
          <th>Name</th>
          <th>Graduation Year</th>
          <th>Contact Information</th>
          {/* Add additional table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {filteredAlumni.map((alumni) => (
          <tr key={alumni.id}>
            <td>{alumni.name}</td>
            <td>{alumni.graduationYear}</td>
            <td>{alumni.contactInfo}</td>
            {/* Add additional table cells with alumni data as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AlumniTable;
