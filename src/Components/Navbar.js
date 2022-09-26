import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.svg';
import "./Navbarr.css";
 const NavbarMenu =()=> {
  return (
    <>
      <Navbar className='navbar navbar-expand-lg  navbar_container'>
    
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top navbar_logo"
            
            />
          </Navbar.Brand>
          <Nav className="me-auto navbar_links"  >
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#projectd">PROJECTS</Nav.Link>
            <Nav.Link href="#diversifications">DIVERSIFICATION</Nav.Link>
            <Nav.Link href="#process">OUR PROCESS</Nav.Link>
            <Nav.Link href="#testimonials">TESTIMONIALS</Nav.Link>
            <Nav.Link href="#careers">CAREERS</Nav.Link>
            <Nav.Link href="#contact-us">CONTACT US</Nav.Link>
          </Nav>
     
      </Navbar>
    </>
  )
}
export default NavbarMenu;