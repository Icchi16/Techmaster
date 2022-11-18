import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Navigation from "../navigation/Navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="nav-bar" />
          <Navbar.Collapse id="nav-bar">
            <Navigation />
            {/* <Outlet /> */}
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to="/">
              <img src="/vite.svg" alt="" />
            </Link>
          </Navbar.Brand>
          <Navigation />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
