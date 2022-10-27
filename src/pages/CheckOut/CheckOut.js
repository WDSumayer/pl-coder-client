import React from 'react';
import './CheckOut.css'
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const {img,name,duration,price} = course;
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className='py-4'>
          <div className='container'>
            <div className='row'>
               <div className='col-md-4 col-12'></div>
               <div className='col-md-4 col-12'>
               <div className='border border-1 rounded p-3 my-5'>
              <h4>Check your identity</h4>
                <p>Your Name: {user.displayName}</p>
                <p>Your Email: {user.email}</p>
              </div>
               </div>
               <div className='col-md-4 col-12'></div>
              
            </div>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <div className='border border-1 rounded p-2'>
                 <div className='text-center'>
                 <img className='rounded checkout-img' src={img} alt=''></img>
                 </div>
                 <div>
                  <h4 className='text-center my-4'>Course Subject: {name}</h4>
                  <h4 className='text-center my-4'>Course Duration: {duration} months</h4>
                  <h4 className='text-center my-4'>Course Price: {price} tk</h4>
                 </div>
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </div>
    );
};

export default CheckOut;