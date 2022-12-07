import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/AuthActions'

export default function SignIn() {
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={(e)=> login(e, dispatch)}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Sign In</button>

        </form>
    </div>
  )
}
