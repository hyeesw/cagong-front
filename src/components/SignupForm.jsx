import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../constants';

function SignupForm() {
  const [userId, setuserId] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [username, setusername] = useState(); // nickname
  const [confirmPassword, setconfirmPassword] = useState();
  // const [type, settype] = useState();
  const navigate = useNavigate();


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
    /*
    setuserId('useruser');
    setpassword('useruser');
    setphone('01011112220');
    setemail('useruser@user.com');
    setusername('useruser');
    */
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

    // 비밀번호와 비밀번호 확인이 일치하지 않는 경우
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    await axios
      .post(`${API_URL}signup/`, {
        user_id: userId,
        password: password,
        phone: phone,
        email: email,
        username: username,
        type: 'CUSTOMERUSER',
      })
      .then((res) => {  // 회원가입 성공. res는 JSON 형식으로 반환된 객체 {"message": "회원가입 완료!"}
        console.log(res);
        alert(res.data['message']);
        navigate('/login');
      })
      .catch((err) => {  // 회원가입 실패.
        console.log(err);
        alert('에러. 회원가입 실패');
      });
  };

  return (
    <Form onSubmit={handleSignupSubmit}>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="id"
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

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Phone Number"
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
        }}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
        Signup
      </Button>
      <Button variant="secondary" type="button" onClick={() => navigate('/')}>
        홈으로
      </Button>
    </Form>
  );
}

export default SignupForm;
