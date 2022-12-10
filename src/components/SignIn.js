import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/AuthActions'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import '../css/Sign.css'

export default function SignIn() {
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Sign In</h1>
        <Form onSubmit={(e)=> login(e, dispatch)} className='theForm'>
          
            <Form.Group className='formGroup'>
              <Form.Label className='label'>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder='Email' id="email" className='input' required />
            </Form.Group>

            <Form.Group className='formGroup'>
              <Form.Label className='label'>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder='Password' id="password" className='input' required />
            </Form.Group>

            <p>
            You don't have an account? <a href="/signup">Sign up now</a>
            </p>

            <Button variant="outline-success" className="submitButton" type="submit">
              Sign In
            </Button>

        </Form>
    </div>
  )
}
