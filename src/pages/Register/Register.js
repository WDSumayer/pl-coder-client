import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')


  const navigate = useNavigate()

  const handleCreateUser = (e) => {
    e.preventDefault()
    setError(false)
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password !== confirm){
      setError("Your password didn't match.")
      return
    }
    createUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
      form.reset();
      handleUserProfile(name)
      navigate('/success')
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })
  }

  const handleUserProfile = (name) => {
    const profile = {displayName: name}
    updateUserProfile(profile)
    .then(() => {}).catch(error => console.error(error))
  }

    return (
       <div className='container'>
         <div className='form-area'>
            <h2>Please create an account !</h2>
            <Form onSubmit={handleCreateUser}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='input-name'>Your Name</Form.Label>
        <Form.Control className='py-3' type="text" name="name" placeholder="Your name" required />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='input-email'>Email address</Form.Label>
        <Form.Control className='py-3' type="email" name="email" placeholder="Enter email" required />
      
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
      <p className='text-danger'>{error}</p>
      <Button style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white w-100 py-3 fs-5' type="submit">
        Submit
      </Button>
      <p className='pt-3'>Already have an account? <Link to='/login'>Log in</Link></p>
    </Form>
        </div>
       </div>
    );
};

export default Register;