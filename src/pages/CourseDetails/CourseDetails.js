import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {description, duration, img, name, price, quizes, servies, videos} = course;
    return (
        <div>
            <img style={{height:'300px', width:'350px'}} src={img} alt=''></img>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quizes}</p>
            <p>{description}</p>
            <p>{videos}</p>
            <p>{duration}</p>
            {
                servies.map(service => <li>{service}</li>)
            }
        </div>
    );
};

export default CourseDetails;