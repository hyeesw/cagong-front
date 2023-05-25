import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomToggle from './CustomToggle';
import Push from './Push';

function MyProfile() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShow = () => {
    setShowOffcanvas(true);
  };

  const handleClose = () => {
    setShowOffcanvas(false);
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <img
            src="/images/profile.jpg"
            alt="프로필이미지"
            style={{ width: '50px', height: '50px' }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: '400px', padding: '20px' }}>
          <Dropdown.Item
            onClick={handleShow}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <img src="/images/bell.png" alt="알림버튼" style={{ width: '30px', height: '30px' }} />
          </Dropdown.Item>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <img
              src="/images/profile.jpg"
              alt="프로필이미지"
              style={{ width: '100px', height: '100px', textAlign: 'center' }}
            />
          </div>
          <Dropdown.Item
            href="#/action-3"
            disabled
            style={{ fontSize: '32px', color: 'black', textAlign: 'center' }}
          >
            (name)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" disabled style={{ textAlign: 'center' }}>
            손님
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            href="#/action-5"
            style={{ fontSize: '20px', color: 'grey', textAlign: 'center' }}
          >
            로그아웃
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: '32px' }}>알림</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Push />
          <Push />
          <Push />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyProfile;
