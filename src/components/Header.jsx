import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getUser, removeUser } from '../util/localstorage';
import MyProfile from './MyProfile';

function Header() {
  const userInfo = getUser();
  // const userInfo = 'asdf'; // 로그인된 경우 테스트용
  const navigate = useNavigate();

  const handleSignoutClick = (e) => {
    e.preventDefault();
    alert('로그아웃 하시겠습니까?');
    removeUser();
    navigate('/');
  };

  return (
    <Nav variant="pills" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link href="/" eventKey="link-0">
          Home
        </Nav.Link>
      </Nav.Item>
      {userInfo ? (
        // 로그인된 상태
        <Nav.Item>
          <Nav.Link href="#" eventKey="link-1" onClick={(e) => handleSignoutClick(e)}>
            Signout
          </Nav.Link>
        </Nav.Item>
      ) : (  // 로그인되지 않은 상태 
        <>
          <Nav.Item>
            <Nav.Link href="/signup" eventKey="link-2">
              Signup
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signin" eventKey="link-1">
              Signin
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      <Nav.Item>
        <Nav.Link href="/point" eventKey="link-3">
          Point
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <MyProfile userInfo={userInfo} />
      </Nav.Item>
    </Nav>
  );
}
export default Header;
