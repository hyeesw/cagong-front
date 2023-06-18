import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Push from './Push'; // 푸쉬알림 정보가 담길 임시 컴포넌트
import { getUser } from '../util/localstorage';

function PushOffcanvas({ showOffcanvas, handleCloseOffcanvas }) {
  const navigate = useNavigate();

  const [notis, setnotis] = useState([
    {
      title: 'CAFE 스타벅스에서 주문이 발생했습니다.',
      msg: '아이스아메리카노을(를) 주문하셨습니다. 2시간 뒤에 다시 알려드릴게요😉',
      send_at: 'send_at',
    },
    { title: '제목', msg: '메시지', send_at: 'send_at' },
  ]);

  const init = async () => {
    const userInfo = await getUser();
    if (!userInfo) {
      // console.log('회원정보가 없거나 토큰무효');
      alert('로그인이 필요합니다.');
      navigate('/signin');
      return;
    }
  };

  useEffect(() => {
    init();
  }, []);

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
