import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from './NavLink';

export const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav>
          <NavLink href="/" title="Home"/>
          <NavLink href="/profile" title="Profile"/>
          <NavLink href="/login" title="Login"/>
        </Nav>
      </Container>
    </Navbar>
  );
};
