import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(true)

  const handleLight = () =>{
    setToggle(false)
  }
 const handleDark = () => {
setToggle(true)
 }
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
           {
              toggle ? <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-warning rounded-circle border-0' onClick={handleLight}>L</button> :  <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-dark rounded-circle border-0' onClick={handleDark}>D</button>
           } 
           
          
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;