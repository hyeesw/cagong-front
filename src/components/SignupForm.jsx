import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../constants';

function SignupForm() {
  const [userId, setuserId] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [username, setusername] = useState(); // nickname
  // const [type, settype] = useState();

  const get = () => {
    axios
      .get(`${API_URL}signup`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get();
    setuserId('useruser');
    setpassword('useruser');
    setphone('01011112220');
    setemail('useruser@user.com');
    setusername('useruser');
  }, []);

  // const ex = {
  //   user_id: 'user1',
  //   username: 'user1',
  //   password: user1,
  //   phone: 01000000000,
  //   type: 'CUSTOMERUSER',
  // };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await axios
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
    <Form onSubmit={handleSignupSubmit}>
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
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
}

export default SignupForm;
