import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {id, description, duration, img, name, price, quizes, servies, videos} = course;
    const navigate = useNavigate()

    const handlePremium = (id) => {
      navigate(`/checkout/${id}`)
    }
    return (
        <div className='container'>
           <h1 className='text-center'>Welcome to {name} course</h1>
           <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className='row'>
            {
                 servies.map(service => <div className='col-md-6'><li>{service}</li></div>)
            }
        </div>
       <div className='d-flex justify-content-between align-items-center'>
       <h3>{duration} months</h3>
       <h3>{price} TK</h3>
       </div>
       <div className='d-flex'>
        <p className='me-2'>Total {videos} videos</p>
        <p>Total {quizes} quizes</p>
       </div>
      </div>
    </div>
  </div>
</div>
<div className='d-flex justify-content-center'>
<button onClick={() => handlePremium(id)} style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white px-5 py-4 fs-5'>Get Premium Access</button>
</div>
        </div>
    );
};

export default CourseDetails;