import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import CustomToggle from './CustomToggle'; // 커스텀 버튼을 생성하는 컴포넌트
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <Nav defaultActiveKey="link-0" className="footer">
      
      {/*홈 페이지*/}
      <Nav.Item>
        <CustomToggle className="footer-button" onClick={() => navigate('/')} eventKey="link-0">홈</CustomToggle>
      </Nav.Item>

      {/*카페 페이지: 링크 추가해주기!!!*/}
      <Nav.Item>
        <CustomToggle className="footer-button" onClick={() => navigate('/')} eventKey="link-1">cafe</CustomToggle>
      </Nav.Item>

      {/*my 페이지: 링크 추가해주기!!!*/}
      <Nav.Item>
        <CustomToggle className="footer-button" onClick={() => navigate('/')} eventKey="link-2">my</CustomToggle>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;