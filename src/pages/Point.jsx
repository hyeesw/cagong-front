import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

// 백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';
import { PointForm } from '../components';
import { getCookie } from '../util/cookie';

function Point() {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  const navigate = useNavigate();

  const [userName, setUserName] = useState(-1); // 유저 이름
  const [userId, setUserId] = useState(userInfo.userID); // 유저 id
  const [userPoint, setUserPoint] = useState(-1); // 유저 point

  // 로그인 안한 유저의 경우
  if (userInfo == null) {
    alert('현재 페이지는 로그인을 하신 후 이용하실 수 있습니다.');
    useEffect(() => {
      navigate('/signin', true);
    });
    return;
  }

  const getUserDB = async (userID) => {
    await axios // axios로 서버에 요청 보내는 부분 시작!
      .post(
        `${API_URL}get_user/`,
        {
          // 백엔드의 url 요청과 보낼 data 객체
          user_id: userID,
        },
        {
          headers: { Authorization: `Bearer ${getCookie('access_token')}` },
        },
      )
      .then((response) => {
        setUserName(response.data.username);
        setUserPoint(response.data.point);
      })
      .catch((err) => {
        console.log('Point.jsx userDB 가져오기 실패 : ', err);
      });
  };
  // 최소 렌더링시에 1번만 실행됨
  useEffect(() => {
    getUserDB(userInfo.userID);
  }, []);

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
      <PointForm userID={userId} userPoint={userPoint} setUserPoint={setUserPoint} />
    </>
  );
}
export default Point;
