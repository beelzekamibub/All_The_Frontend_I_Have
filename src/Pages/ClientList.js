import React from 'react';
import { Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';

export const ClientList = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidenav />
      <div style={{ flex: 1, padding: '20px' }}>
        <h3>Client List</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

