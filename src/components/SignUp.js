import React from "react";
import { useDispatch } from "react-redux";
import { signupAction } from "../actions/AuthActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Sign.css";

export default function SignUp() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={(e) => signupAction(e, dispatch)} className="theForm">
        <Form.Group className="formGroup">
          <Form.Label className="label">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            className="input"
            required
          />
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="input"
            required
          />
        </Form.Group>

        {/* <Form.Group className='formGroup'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" id="name" required />
            </Form.Group> */}

        <Form.Group className="formGroup">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="input"
            required
          />
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Select aria-label="Default select example" className="input">
            <option>Select role</option>
            <option value="customer">Customer</option>
            <option value="provider">Provider</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="outline-success"
          className="submitButton"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
