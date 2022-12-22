import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://pl-coder-server-wdsumayer.vercel.app/courses')
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className='courses-area'>
           <div className='container'>
           
           {
            loading ?  <div className='row'>
            <div className='vh-100 text-center pt-5'>
              <Loading></Loading>
            </div>
        </div>  
        :
        <div className='row py-5'>
        <div className='col-md-3 mb-5'>
            {
               
                courses.map(course => <li className='course-list' key={course.category_id}><Link to={`/course/${course.category_id}`}>{course.course_name}</Link></li>)
                
            }
        </div>
        <div className='col-md-9'>
            <div>
            <Row xs={1} md={2} lg={3} className="g-4">
          {  
              courses.map(course => <Course key={course.category_id} course={course}></Course>)  
          }
          </Row>
            </div>
        </div>
    </div>
           }
           </div>
        </div>
    );
};

export default Courses;