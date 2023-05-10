import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../constants';

function SignupForm() {
  const [userId] = useState();
  const [password] = useState();
  const [phone] = useState();
  const [email] = useState();
  const [username] = useState(); // nickname
  // const [type, settype] = useState();

  const [users, setusers] = useState();
  const getUsers = () => {
    // e.preventDefault();
    axios
      .get(`${API_URL}signup`)
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
    // console.log(users);
  }, [users]);

  // const ex = {
  //   user_id: 'user1',
  //   username: 'user1',
  //   password: user1,
  //   phone: 01000000000,
  //   type: 'CUSTOMERUSER',
  // };

  const createUser = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}signup/`, {
        user_id: userId,
        password: password,
        phone: phone,
        email: email,
        username: username,
        type: 'CUSTOMERUSER',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={createUser}>
        Submit
      </Button>
    </Form>
  );
}

export default SignupForm;
