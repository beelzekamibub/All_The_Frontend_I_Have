import React, { Component } from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import MyTypewriterComponentt from "../Components/MyTypewriterComponent.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "../styles/Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { BiSupport, BiSync } from "react-icons/bi";
import { AiOutlineToTop } from "react-icons/ai";

import { Container, Row, Col } from "react-bootstrap";

function Home(){
  return (
    <>
      <Navbarr />
      <div style={{ marginTop: "66px" }}>
        <MDBContainer className="containerhome">
          <MDBRow className="containerrow">
            <MDBCol>
              <div className="lefthome">
                <h6 className="titlehome">PortfolioPilot</h6>
                <div className="typing">
                  <MyTypewriterComponentt />
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <Form className="signInForm" id="signInForm">
                <center>
                  <img
                    className="logo"
                    src={require("../Images/logo.png")}
                    alt="logo"
                  />
                </center>
                <h3 className="signInHeader">Advisor's SignIn</h3>
                <p className="signInText">
                  Admin access via <b>Advisor</b> Account
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Sign In
                </Button>

                <Button
                  variant="link"
                  size="sm"
                  id="abc"
                  href="/forgetPassword"
                >
                  Forgot Password?
                </Button>
                <div>
                  <p className="clickHereClass">Don't have an account?</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="clickHereclass"
                    id="clickHereId"
                    href="/SignUp">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Container>
          <h2
            className="text-center"
            style={{
              marginBottom: "3%",
              marginTop: "2%",
              fontFamily: "Kanit",
              fontWeight: "700",
            }}
          >
            Salient Features
          </h2>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={BiSync}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    ALWAYS IN SYNC
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    PortfolioPilot will take care of synchronizing data so you
                    can focus on investing.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={AiOutlineToTop}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    STAY ON TOP OF EVERYTHING
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Keep track of your investments at anytime with
                    PortfolioPilot
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card
                style={{ backgroundColor: "lightgrey", marginBottom: "6%" }}
              >
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={BiSupport}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    INSTANT CUSTOMER SUPPORT
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Having issues? Get them resolved within minutes by our
                    support team available 24x7.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );

}
export default Home;


