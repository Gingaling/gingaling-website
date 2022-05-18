import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink to="/change-password" className="nav-link">
      Change Password
    </NavLink>
    <NavLink to="/sign-out" className="nav-link">
      Sign Out
    </NavLink>
    {/* <NavLink to='/' className='nav-link'>Add a Syllabus</NavLink> */}
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink to="/resources" className="nav-link">
      Accessibility Resources
    </NavLink>
    <NavLink to="/tbd" className="nav-link">
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    {/* <NavLink to='/' className='nav-link'>Home</NavLink> */}
    <NavLink to="/syllabus" className="nav-link">
      Syllabus
    </NavLink>
  </>
);

const Header = ({ user }) => (
  <Navbar id="navbar" variant="dark" expand="md">
    <Container>
      <Navbar.Brand>
        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
          <img id="logo" src="https://i.imgur.com/lwmZQ9G.png"></img>
          GA University
        </Link>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {user && (
            <span className="navbar-text me-2">Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
