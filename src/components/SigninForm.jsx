import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';
// import { API_URL } from '../constants';

function SigninForm() {
  const [userId, setuserID] = useState();
  const [password, setpassword] = useState();

  const [users, setusers] = useState();
  const getUsers = () => {
    // e.preventDefault();
    axios
      .get(`/signup`)
      .then((res) => {
        setusers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  // const ex = {
  //   user_id: 'user1',
  //   password: 'user1',
  // };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/signup`, {
        user_id: userId,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID"
          onChange={(e) => {
            setuserID(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SigninForm;
