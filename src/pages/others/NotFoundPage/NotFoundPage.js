import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='container'>
            <div className='error-page'>
                <div className='text-center'>
                    <h1>Oops, you have lost !!!</h1>
                   <Link to='/'> <button style={{backgroundColor: '#099b92'}} className='btn border-0 rounded py-3 px-4 fs-4 text-white'>Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;