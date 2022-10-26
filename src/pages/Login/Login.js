import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'

const Login = () => {
    const {googleLogin, userLogin} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
      googleLogin(provider)
      .then(result => {
        const user = result.user
        console.log(user)
        navigate(from, {replace: true})
      })
      .catch(error => {
        console.error(error)
      })
    }


    const handleLoginUser = (e) => {
        e.preventDefault()
        setError(false)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        form.reset()
        navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }



    
    return (
        <div className='container'>
        <div className='form-area'>
           <h2>Please create an account !</h2>
           <Form onSubmit={handleLoginUser}>
     
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label className='input-email'>Email address</Form.Label>
       <Form.Control className='py-3' type="email" name="email" placeholder="Enter email" required />
     
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label className='input-password'>Password</Form.Label>
       <Form.Control className='py-3' type="password" name="password" placeholder="Password" required />
     </Form.Group>
    
     <p className='text-danger'>{error}</p>
     <Button style={{backgroundColor:'#099B92',fontWeight:'500'}} className='btn border-0 rounded text-white w-100 py-3 fs-5' type="submit">
       Log in
     </Button>
     <p className='pt-3'>Create an account. <Link to='./register'>Register</Link></p>

   </Form>
   <div>
    <h5 className='text-center py-2'>or</h5>
      <button onClick={handleGoogleLogin} style={{border:'1px solid #444',fontWeight:'500'}} className='btn rounded-1 text-dark py-3 w-100'><FaGoogle className='fs-4' /></button>
   </div>
       </div>
      </div>
    );
};

export default Login;