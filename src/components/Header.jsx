import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import myLogo from '../images/icons/farhanFB.jpg';



const Header = () => {
  return (
    <Navbar expand="lg" className='nav-bar'>
        <Navbar.Brand href="#home" className="navbar-brand"><img src={myLogo} alt="logo" className="my-logo" />{' '}codeHokage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='button-navbar'/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-links">
          <Nav.Link href="#home" className='nav-link'><span>//</span>{' '}Home</Nav.Link>
          <Nav.Link href="#about" className='nav-link'><span>//</span>{' '}About</Nav.Link>
          <Nav.Link href="#experience" className='nav-link'><span>//</span>{' '}Experience</Nav.Link>
          <Nav.Link href="#contact" className='nav-link'><span>//</span>{' '}Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>

  )
}

export default Header

