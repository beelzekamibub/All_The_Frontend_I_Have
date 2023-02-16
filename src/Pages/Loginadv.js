import React, { useState } from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Logininvs.css";
import axios from "axios";

export const Loginadv = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      }).then((result) => {
        console.log(result.data);
        alert("success");
      }).catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  return (
    <>
      <Navbarr />
      <div className="wholeLoginadvPage">
        <Form className="signInForm" id="signInForm">
          <center>
            <img
              className="logo"
              src={require("../Images/logo.png")}
              alt="logo"
            />
          </center>
          <h3 className="signUpHeader">Advisor's SignIn</h3>
          <p className="signUpText">Let's build your Portfolio</p>
          <Form.Group className="mb-3" controlId="formBasicEmail1" md="true">
            <Form.Label>User name</Form.Label>
            <Form.Control value={email} onChange={handleEmail} type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" md="true">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={handlePassword}
              type="password"
            />
          </Form.Group>

          <Button onClick={handleApi} variant="primary" type="submit">
            Sign In
          </Button>

          <Button variant="link" size="sm" id="abc" href="/forgetPassword">
            Forgot Password?
          </Button>
          <div>
            <p className="clickHereClass">Don't have an account?</p>
            <Button
              variant="link"
              size="sm"
              className="clickHereclass"
              id="clickHereId"
            >
              Ask Advisor
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};
