import React, { useState, useEffect } from 'react';
import './Point.css';
import {PointForm, SuggestLoginForm} from '../components';
import Alert from 'react-bootstrap/Alert';

function Point() {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) //로그인 한 유저 객체 가져오기
  
  if(userInfo == null){ //로그인 안한 유저의 경우
    console.log("널임을 확인할 수 있습니다.");
    return(
      <SuggestLoginForm></SuggestLoginForm> //"로그인해주세요" 페이지
    );
  }
  const userName =  userInfo.username; // 유저 이름
  const user_id =  userInfo.user_id; // 유저 ID
  const [userPoint, setUserPoint] = useState(userInfo.point); //유저 point
  
  console.log("실행됨?")

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
      <PointForm userID={user_id} userPoint={userPoint} setUserPoint={setUserPoint}/>
    </>
  );
}
export default Point;
