import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { PointForm } from '../components';

function Point() {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  const navigate = useNavigate();

  // 로그인 안한 유저의 경우
  if (userInfo == null) {
    alert('현재 페이지는 로그인을 하신 후 이용하실 수 있습니다.');
    useEffect(() => {
      navigate('/signin', true);
    });
    return;
  }

  const userName = userInfo.username; // 유저 이름
  const userId = userInfo.user_id; // 유저 ID
  const [userPoint, setUserPoint] = useState(userInfo.point); // 유저 point
  const [userChanged, setUserChanged] = useState(false); // localsotrage에 반영하기 위함

  // localstorage에 userInfo 객체 다시 등록 (변경사항이 있으므로)
  if (userChanged) {
    userInfo.point = userPoint; // 새로운 userPoint로 업데이트 하기
    window.localStorage.removeItem('userInfo');
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  return (
    <>
      <Alert variant="light">
        <Alert.Heading>충전하기</Alert.Heading>
        <hr />
        <p className="mb-0">충전 금액을 선택해주세요.</p>
      </Alert>
      <Alert variant="light" className="text-center">
        <p>
          <strong>{userName}</strong> 님의 현재 point
        </p>
        <p className="fs-3 fw-bold mb-5">{userPoint}</p>
      </Alert>
      <PointForm
        userID={userId}
        userPoint={userPoint}
        setUserPoint={setUserPoint}
        setUserChanged={setUserChanged}
      />
    </>
  );
}
export default Point;
