import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getUser } from '../util/localstorage';
import CustomToggle from './CustomToggle'; // 커스텀 버튼을 생성하는 컴포넌트
import MyProfile from './MyProfile';
import './Header.css';

function Header() {
  const userInfo = getUser();
  const navigate = useNavigate(); // !!!없애면 안됨!!!

  return (
    <Nav defaultActiveKey="link-0" className="header">
      {/* 홈 페이지 */}
      <Nav.Item className="header-logo">
        <Nav.Link href="/" eventKey="link-0">
          <img
            src="/images/header-logo-no-background.png"
            alt="Home Button"
            style={{ width: '180px', height: '60px' }}
          />
        </Nav.Link>
      </Nav.Item>

      {/* 검색 */}
      <Nav.Item className="header-search">(검색 창 들어갈 자리)</Nav.Item>

      {/* 포인트 페이지 */}
      <Nav.Item>
        <CustomToggle
          className="header-button"
          onClick={() => navigate('/point')}
          eventKey="link-1"
        >
          포인트
        </CustomToggle>
      </Nav.Item>

      {/* 프로필 */}
      <Nav.Item className="header-profile">
        <MyProfile userInfo={userInfo} />
      </Nav.Item>
    </Nav>
  );
}

export default Header;
