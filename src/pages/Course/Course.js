import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import SmallLoading from '../../components/SmallLoading/SmallLoading';

const Course = ({course}) => {
    const {course_name, course_img, category_id} = course;
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleCourse = (id) => {
        navigate(`/course/${id}`)
    }
    return (
        <Col>
        
         <Card onClick={() => handleCourse(category_id)} style={{cursor:'pointer'}}>
           <div style={{height:'200px', width:'100%'}}>
            <img style={{width:'100%', height:'100%',borderRadius:'3px'}} src={course_img} alt=''></img>
           </div>
            <Card.Body>
              <Card.Title className='fs-2 mb-4'>{course_name}</Card.Title>
             <Link to={`/course/${category_id}`}>
             <button onClick={() => setLoading(true)} style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white w-100 py-3 fs-5'>{
              loading ? <SmallLoading></SmallLoading> : 'course details'
             }</button>
             </Link>
            </Card.Body>
          </Card>
        
        </Col>
    );
};

export default Course;