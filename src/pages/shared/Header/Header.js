import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/courses'>Courses</Link>
            <Link className='nav-link' to='/blog'>Blog</Link>
            <Link className='nav-link' to='/faq'>FAQ</Link>
            
           
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;