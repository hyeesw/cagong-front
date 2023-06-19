import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Offcanvas from 'react-bootstrap/Offcanvas';
import moment from 'moment';
import axios from 'axios';
import Push from './Push'; // 푸쉬알림 정보가 담길 임시 컴포넌트
import { getUser } from '../util/localstorage';
import { getCookie } from '../util/cookie';
import { API_URL } from '../constants';

function PushOffcanvas({ showOffcanvas, handleCloseOffcanvas }) {
  const navigate = useNavigate();
  const [intervalId, setintervalId] = useState('0');
  const [notis, setnotis] = useState(
    // [{
    //   title: 'CAFE 스타벅스에서 주문이 발생했습니다.',
    //   msg: '아이스아메리카노을(를) 주문하셨습니다. 2시간 뒤에 다시 알려드릴게요😉',
    //   send_at: 'send_at',
    // },
    // { title: '제목', msg: '메시지', send_at: 'send_at' },]
    [],
  );

  const getNotis = async (userInfo) => {
    // null인경우
    if (!userInfo) {
      clearInterval(intervalId);

      alert('로그인이 필요합니다.');
      navigate('/signin');
      return;
    }
    const accessToken = getCookie('access_token');
    const result = await axios
      .put(`${API_URL}getpush/${userInfo.user_id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        // console.log(res.data.notifications);
        // 레코드가 있으면 레코드 리스트 반환
        if (res.data.notifications.length) {
          return res.data.notifications;
        }
        // 레코드 없으면 빈배열 반환
        return [];
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    if (result.length) {
      setnotis([
        ...result.map((_item) => {
          const item = _item;
          item.send_at = moment(_item.send_at).format('MM.DD');
          return item;
        }),
      ]);
    }
  };

  const init = async () => {
    const userInfo = await getUser();
    try {
      getNotis(userInfo);
    } catch {
      clearInterval(intervalId);

      alert('로그인이 필요합니다.');
      navigate('/signin');
    }
  };

  // useEffect(() => {
  //   init();
  //   const id = setInterval(() => {
  //     init();
  //   }, 10000);
  //   setintervalId(id);

  //   return () => clearInterval(id);
  // }, []);

  useEffect(() => {
    // true이면 실행
    if (showOffcanvas) {
      init();
    }
  }, [showOffcanvas]);

  useEffect(() => {
    console.log('notis 변경', notis);
  }, [notis]);
  return (
    <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontSize: '26px' }}>알림</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {notis.length
          ? notis.map((noti) => {
              return <Push noti={noti} />;
            })
          : '알림이 없습니다☕🤏'}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default PushOffcanvas;
