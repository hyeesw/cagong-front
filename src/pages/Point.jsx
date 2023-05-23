import React, { useState, useEffect } from 'react';
import './Point.css';
import {PointForm} from '../components';
import Alert from 'react-bootstrap/Alert';

function Point() {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))

  const [userName, setUserName] = useState(userInfo.username);
  const [userPoint, setUserPoint] = useState(userInfo.point);

  return (
    <>
      <Alert variant="light" >
        <Alert.Heading>충전하기</Alert.Heading>
        <hr />
        <p className="mb-0">
          충전 금액을 선택해주세요.
        </p>
      </Alert>
      <Alert variant="light" className="text-center">
        <p>
          <strong>{userName}</strong> 님의 현재 point
        </p>
        <p className="fs-3 fw-bold mb-5">
          {userPoint}
        </p>
      </Alert>
      <PointForm userPoint={userPoint} setUserPoint={setUserPoint}/>
    </>
  );
}
export default Point;
