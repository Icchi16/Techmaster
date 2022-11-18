import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/esm/NavLink";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="/">
                Logo
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Toggle>
                <Nav>
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                </Nav>
              </Navbar.Toggle>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
