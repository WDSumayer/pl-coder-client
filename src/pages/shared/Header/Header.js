import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
  const {user} = useContext(AuthContext)
  const [toggle, setToggle] = useState(true)

  const handleLight = () =>{
    setToggle(false)
  }
 const handleDark = () => {
setToggle(true)
 }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-0'>
      <Container>
        <div className='d-flex align-items-center'>
        <Link className='nav-link' to='/'>React-Bootstrap</Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center main-menu">
          {
              toggle ? <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-warning rounded-circle border-0 me-5' onClick={handleLight}>L</button> :  <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-dark rounded-circle border-0 me-5' onClick={handleDark}>D</button>
           } 
            <Link className='nav-link px-3' to='/'>Home</Link>
            <Link className='nav-link px-3' to='/courses'>Courses</Link>
            <Link className='nav-link px-3' to='/blog'>Blog</Link>
            <Link className='nav-link px-3' to='/faq'>FAQ</Link>

            <Link className='nav-link' to='/login'><button style={{border:'1px solid #444',fontWeight:'500'}} className='btn rounded-1 text-dark py-2 px-3 fs-5 ms-2'>Login</button></Link>
            <Link className='nav-link' to='/register'><button style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded-1 text-white px-3 py-2 fs-5 ms-2'>Sign up</button></Link>





          
           
          
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;