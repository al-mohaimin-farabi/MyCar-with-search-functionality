import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={HashLink} to="/">
          <img className="img-fluid m-0" width="130" src="logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/explore">
              Explore
            </Nav.Link>
            {user.email && (
              <Nav.Link as={HashLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}
            {!user.email ? (
              <Nav.Link as={HashLink} to="/login">
                Log in
              </Nav.Link>
            ) : (
              <Nav.Link as={HashLink} onClick={logout} to="/">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
