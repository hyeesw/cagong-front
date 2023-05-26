import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

function Footer() {

  return (
    <Nav defaultActiveKey="link-0" className="footer">
      
      {/*홈 페이지*/}
      <Nav.Item className="footer-button">
        <Nav.Link href="/" eventKey="link-0">
          홈
        </Nav.Link>
      </Nav.Item>

      {/*카페 페이지*/}
      <Nav.Item className="footer-button">
        <Nav.Link href="/" eventKey="link-1"> {/* 카페 페이지 링크 추가해주기 */}
          cafe
        </Nav.Link>
      </Nav.Item>

      {/*my 페이지*/}
      <Nav.Item className="footer-button">
        <Nav.Link href="/" eventKey="link-2"> {/* my 페이지 링크 추가해주기 */}
          my
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;