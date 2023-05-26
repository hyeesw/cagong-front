import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {PointForm} from '../components';
import Alert from 'react-bootstrap/Alert';

function Point() {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo')); //로그인 한 유저 객체 가져오기
  const navigate = useNavigate();

  //로그인 안한 유저의 경우
  if(userInfo == null){
      alert('현재 페이지는 로그인을 하신 후 이용하실 수 있습니다.');
      useEffect(()=>{
        navigate('/signin', true); //로그인 페이지로 리다이렉트
      });
      return
  }


  const userName =  userInfo.username; // 유저 이름
  const user_id =  userInfo.user_id; // 유저 ID
  const [userPoint, setUserPoint] = useState(userInfo.point); //유저 point
  const [userChanged, setUserChanged] = useState(false); //localsotrage에 반영하기 위함
  
  //localstorage에 userInfo 객체 다시 등록 (변경사항이 있으므로)
  if(userChanged){
    userInfo.point =  userPoint; //새로운 userPoint로 업데이트 하기
    window.localStorage.removeItem('userInfo');
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

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
      <PointForm userID={user_id} userPoint={userPoint} setUserPoint={setUserPoint} setUserChanged={setUserChanged}/>
    </>
  );
}
export default Point;
