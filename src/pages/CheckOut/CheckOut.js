import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
          <div className='container'>
            <div>
                <h4>Check your identity</h4>
                <p>Your Name: {user.displayName}</p>
                <p>Your Email: {user.email}</p>
            </div>
          </div>
        </div>
    );
};

export default CheckOut;