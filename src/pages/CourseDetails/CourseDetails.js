import React from 'react';
import { useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import './CourseDetails.css'

const CourseDetails = () => {
    const course = useLoaderData()
    const {id, description, duration, img, name, price, quizes, servies, videos} = course;
    const navigate = useNavigate()
    const ref = useRef()
    const handlePremium = (id) => {
      navigate(`/checkout/${id}`)
    }
    return (
        <div className='container'>
          <div className='row d-flex justify-content-center my-4'>
         <div className='col-md-7 col-12'>
         <h1 className='m-0 py-2'>Welcome to {name} course</h1>
         </div>
          <div className='col-md-3 col-12 justify-content-end d-flex'>
          <ReactToPrint trigger={() => <button style={{backgroundColor:'#099B92'}} className='border-0 rounded fs-3 px-4 text-white'>PDF</button>} content={() => ref.current}></ReactToPrint>
          </div>
          </div>
        <div className='course-details-box'>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div className="col-md-7">
      <div ref={ref} className="card-body py-4 px-5">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className='row'>
            {
                 servies.map(service => <div className='col-md-6'><li>{service}</li></div>)
            }
        </div>
       <div className='d-flex justify-content-start align-items-center'>
       <h3 className='me-4'>{duration} months</h3>
       <h3>{price} TK</h3>
       </div>
       <div className='d-flex'>
        <p className='me-2'>Total videos: {videos} </p>
        <p>Total quizes: {quizes} </p>
       </div>
      </div>
    </div>
  </div>
</div>
<div className='d-flex justify-content-end'>
<button onClick={() => handlePremium(id)} style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white px-5 py-4 fs-5'>Get Premium Access</button>
</div>
        </div>

        </div>
    );
};

export default CourseDetails;