import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header-style.scss";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/images/logo.svg";

export const Header = ({ currentUser }) => {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <Image src={Logo} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link to="/shop" className="nav-link">
                SHOP
              </Link>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>

              {currentUser ? (
                <div style={{cursor: "pointer"}}  className="nav-link" onClick={() => auth.signOut()}>
                  SIGNOUT
                </div>
              ) : (
                <Link to="/signin" className="nav-link">
                  SIGNIN
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
