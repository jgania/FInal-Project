import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NavbarComp extends Component {
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="Home">Jordan Gania</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
          </Nav>
      </Navbar>
      </>
    )
  }
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
