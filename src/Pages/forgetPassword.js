import React from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/forgetPassword.css";

export const ForgetPassword = () => {

    return (
      <>
      
        <Navbarr />
        <div className="forgetPassword">
          
        
        <Form className="forgetPasswordForm" id="forgetPasswordForm">
            
          <h3 className="forgetPasswordHeader">Forgot Password</h3>
          <p className="forgetPasswordText">
            Enter your email and we will Send you a rest link
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail or phone number</Form.Label>
            <Form.Control type="text" placeholder="David Parker" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send me the link
          </Button>

        </Form>
        </div>
        <Footer />
      </>
    );
  
}
