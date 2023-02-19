import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Sidenav } from '../Components/sidenav'



export const AdviserProfile = (props) => {    

   
        const { firstname, lastname, email, phone, company, city, state, address } = props;

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidenav />
          <div style={{ flex: 1, padding: '20px' }}>
          <div>
      <Container>
        <Row>
          <Col>
            <h1>Profile</h1>
            <hr />
            <p>
              <strong>First Name:</strong> {props.firstname}
            </p>
            <p>
              <strong>Last Name:</strong> {props.lastname}
            </p>
            <p>
              <strong>E-mail:</strong> {props.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {props.phone}
            </p>
            <p>
              <strong>Company:</strong> {props.company}
            </p>
            <p>
              <strong>Address:</strong> {props.address}
            </p>
            <p>
              <strong>City:</strong> {props.city}
            </p>
            <p>
              <strong>State:</strong> {props.state}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    
           
          </div>
        </div>
      );
        
}