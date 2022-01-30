import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";


export const SignInAndSignUpPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <SignIn />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <SignUp />
          </Col>
        </Row>
      </Container>
    </>
  );
};
