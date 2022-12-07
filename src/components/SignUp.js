import React from 'react'
import { useDispatch } from 'react-redux';
import { signupAction } from '../actions/AuthActions'

export default function SignUp() {
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={(e)=> signupAction(e, dispatch)}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <select name="role" id="role">
                <option value="customer">Customer</option>
                <option value="provider">provider</option>
            </select>
            <button type="submit">Sign Up</button>

        </form>
    </div>
  )
}
