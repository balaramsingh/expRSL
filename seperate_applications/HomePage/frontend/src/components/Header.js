import React from 'react'
import {Navbar,NavDropdown,Nav,Button,Form,FormControl} from 'react-bootstrap'
import "./Navbar.css"
import logo from './logo.png'
const Header =()=> {
    return (
        <Navbar className="NavbarColour" stexpand="lg">
        <Navbar.Brand href="#home"><h5 style={{color:"white"}}>expRSL</h5></Navbar.Brand>
        <div className="menu-icon">  <img src={logo} width="45" height="45" /></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" bg="white">
            <Nav.Link href="#home"><h5 style={{color:"white"}}>Signup</h5></Nav.Link>
            <Nav.Link href="#link" bg="white"><h5 style={{color:"white"}}>Signup</h5></Nav.Link>
            <Nav.Link href="#home"><h4 style={{color:"white"}}><h5 style={{color:"white"}}>About</h5></h4></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Header;