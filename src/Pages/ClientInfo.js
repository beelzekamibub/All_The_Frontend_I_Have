import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


export const ClientInfo = ({ items, handleDelete }) => {
  return (
    <div id="wholeBody">
      <h3>Welcome, AdviserName</h3>
      <p >It's good to see you again</p>
      <div id="BtnAddNewClient">
      <Button variant="primary">Add new Client</Button>{" "}
      <Button variant="secondary">Investment </Button>
      </div>
      
      <p id="clientInfoPara">Client Details</p>
      <Table responsive striped bordered hover >
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Client Name</th>
            <th>E-mail</th>
            <th>Phone No.</th>
            <th>New Investment</th> 
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <label>{item.id}</label>
              </td>
              <td>
                <label>{item.clientName}</label>
              </td>
              <td>
                <label>{item.mail}</label>
              </td>
              <td>
                <label>{item.phoneNo}</label>
              </td>
              <td>
                <label>{item.newInves}</label>
              </td>
              <td>
                <Button variant="link" >Edit</Button>
              </td>
              <td>
                <Button variant="link" onClick={() => handleDelete(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};