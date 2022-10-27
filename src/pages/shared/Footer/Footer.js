import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-4 col-12'>
                    <div>
                        <h2 className='text-white pb-3 footer-logo'>PL-Coder</h2>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='footer-menu pb-3'>
                       <p> <Link className='px-3' to='/'>Home</Link></p>
                       <p> <Link className='px-3' to='/courses'>Courses</Link></p>
                       <p> <Link className='px-3' to='/blog'>Blog</Link></p>
                       <p> <Link className='px-3' to='/faq'>FAQ</Link></p>
             
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    
                    <div className='d-flex justify-content-center justify-content-md-end'>
                       <a className='text-white' href='#'><FaFacebook className='fs-3 ms-3'></FaFacebook></a>
                       <a className='text-white' href='#'><FaTwitter className='fs-3 ms-3'></FaTwitter></a>
                       <a className='text-white' href='#'><FaLinkedin className='fs-3 ms-3'></FaLinkedin></a>
                       <a className='text-white' href='#'><FaWhatsapp className='fs-3 ms-3'></FaWhatsapp></a>
                    </div>
                </div>
            </div>
          
          </div>
          <div className='py-3'>
                <p className='text-center text-white'>Copyright © 2022 Md. Sumayer</p>
            </div>
         
        </div>
        
    );
};

export default Footer;