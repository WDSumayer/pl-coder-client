import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='hero-area'>
          <div className='container'>
            <div className='row'>
               <div className='col-md-7'>
                    <div className='hero-content'>
                        <h1 className='text-white'>Build Your Carrer on Programming !!!</h1>
                        <p>Welcome to our programming site. If you want to be a successfull prorammer, our courses will be your best choice. We provide you standard courses.</p>
                        <button className='hero-btn'>Courses</button>
                    </div>
               </div>
               <div className='col-md-5'></div>
            </div>
          </div>
        </div>
    );
};

export default Home;