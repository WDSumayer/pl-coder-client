import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import { FaUserTie } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Header.css'


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const [toggle, setToggle] = useState(true)

  const handleLight = () =>{
    setToggle(false)
  }
 const handleDark = () => {
setToggle(true)
 }

 const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => {
    console.error(error)
  })
 }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-3'>
      <Container>
        <div className='d-flex align-items-center'>
        <Link className='nav-link' to='/'><h1 className='logo'><span style={{color:'#099B92'}}>PL</span>-Coder</h1></Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center main-menu">
          {
              toggle ? <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-warning rounded-circle border-0' onClick={handleLight}>L</button> :  <button style={{width:'45px', height:'45px'}} className='fw-bold btn btn-dark rounded-circle border-0' onClick={handleDark}>D</button>
           } 
            <Link className='nav-link px-3' to='/'>Home</Link>
            <Link className='nav-link px-3' to='/courses'>Courses</Link>
            <Link className='nav-link px-3' to='/blog'>Blog</Link>
            <Link className='nav-link px-3' to='/faq'>FAQ</Link>
           
           {
            
             user?.photoURL &&  <Tippy content={user.displayName}><Image roundedCircle style={{height:'30px'}} src={user.photoURL} className="mx-3"></Image></Tippy> || user?.photoURL === null && <Tippy content={user.displayName}><p className='m-0'>< FaUserTie className="mx-3 user-icon"></FaUserTie></p></Tippy>  || undefined
            
           }

           {
             user?.uid ?
             <>
              
            
               
              <button onClick={handleLogOut} style={{border:'1px solid #444',fontWeight:'500'}} className='my-2 btn rounded-1 text-dark py-2 px-3 fs-5 ms-2'>Log out</button>
             </>
            
             :
             <>
              <Link className='nav-link' to='/login'><button style={{border:'1px solid #444',fontWeight:'500'}} className='btn rounded-1 text-dark py-2 px-3 fs-5 ms-2'>Login</button></Link>
            <Link className='nav-link' to='/register'><button style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded-1 text-white px-3 py-2 fs-5 ms-2'>Sign up</button></Link>
             </>
           }





          
           
          
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;