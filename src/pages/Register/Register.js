import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
       <div className='container'>
         <div className='form-area'>
            <h2>Please create an account !</h2>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='input-name'>Your Name</Form.Label>
        <Form.Control className='py-3' type="text" name="name" placeholder="Your name" required />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='input-email'>Email address</Form.Label>
        <Form.Control className='py-3' type="email" placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-password'>Password</Form.Label>
        <Form.Control className='py-3' type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirm">
        <Form.Label className='input-confirm'>Confirm Password</Form.Label>
        <Form.Control className='py-3' type="password" name="confirm" placeholder="Retype your password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white w-100 py-3 fs-5' type="submit">
        Submit
      </Button>
      <p className='pt-3'>Already have an account? <Link to='./login'>Log in</Link></p>
    </Form>
        </div>
       </div>
    );
};

export default Register;