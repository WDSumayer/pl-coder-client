import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessMessage.css'

const SuccessMessage = (props) => {
    return (
        <div className='container'>
            <div className='success-message-box'>
                <h4 className='text-success'>User Created Successfully</h4>
                <Link to='/'><p>Back Home</p></Link>
            </div>
           
        </div>
    );
};

export default SuccessMessage;