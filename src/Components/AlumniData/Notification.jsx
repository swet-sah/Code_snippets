import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { AlumniContext } from './AlumniContext';

const Notification = () => {
  const { notification, handleNotification } = useContext(AlumniContext);

  return (
    <>
      {notification && <Alert variant="success">{notification}</Alert>}
      <Button variant="primary" onClick={handleNotification}>
        Send Notification
      </Button>
    </>
  );
};

export default Notification;
