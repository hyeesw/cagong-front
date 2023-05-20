import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../constants';

import { setCookie } from '../util/cookie';

function SigninForm() {
  const [userId, setuserId] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const get = async () => {
    await axios
      .get(`${API_URL}signin/`)
      .then((res) => {
        console.log('get', res.data);
      })
      .catch((err) => {
        console.log('err', err.data);
      });
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    console.log(userId, password);
  }, [userId, password]);

  // const ex = {
  //   user_id: 'user1',
  //   password: user1,
  // };

  const handelSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(`${API_URL}signin/`, {
          user_id: userId,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
      // access_token : 1시간, refresh_token : 1년
      await setCookie('access_token', response.data.jwt_token.access_token, {
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });
      await setCookie('refresh_token', response.data.jwt_token.refresh_token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      });

      const user = { ...response.data.user };
      localStorage.setItem('userInfo', JSON.stringify(user));
      navigate(`/`);
    } catch {
      alert('로그인 실패. 입력정보가 올바른지 확인하세요');
    }
  };

  return (
    <Form onSubmit={handelSigninSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID"
          onChange={(e) => {
            setuserId(e.target.value);
          }}
        />
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
        Signin
      </Button>
    </Form>
  );
}

export default SigninForm;
