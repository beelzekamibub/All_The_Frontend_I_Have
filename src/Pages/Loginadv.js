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


  const SignIn = (e) => {
    e.preventDefault();
    let values = {
      "email": email,
      "password": password,
    };

    try {
      alert("ljlslfdjls");
      console.log("made a fetch call");
      fetch("https://localhost:7061/api/User/AdvisorLogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      })
        .then((res) => {if(res.status===200)alert("User Registered");
                        console.log(res.body);})
        .then((data) => {
          if(data === "Undefined")alert(data)
          console.log(data);
          window.location='/dashboardadv'
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
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
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" md="true">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>

          <Button onClick={SignIn} variant="primary" type="submit">
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
