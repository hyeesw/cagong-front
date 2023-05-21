import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomToggle from './CustomToggle'; // 커스텀 버튼을 생성하는 컴포넌트
import Push from './Push'; // 푸쉬알림 정보가 담길 임시 컴포넌트

function MyProfile({ userInfo }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShow = () => {
    if (userInfo) { 
      setShowOffcanvas(true);
    } else { 
      alert('로그인 후 이용 가능합니다.'); // 로그인되지 않은 상태에는 canvas 창을 열 수 없고 alert
    }
  };

  const handleClose = () => {
    setShowOffcanvas(false);
  };

  // 프로필 사진 자리에 들어갈 것
  let SmallProfilePhoto;
  let BigProfilePhoto;
  if (userInfo) { // 로그인된 상태
    SmallProfilePhoto = <div className="circle" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "grey" }}></div>
    BigProfilePhoto = <div className="circle" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "grey", textAlign: "center" }}></div>
  } else {  // 로그인되지 않은 상태
    SmallProfilePhoto = <p>프로필</p>;
    BigProfilePhoto = <p>프로필</p>;
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id="dropdown-custom-components"
          userInfo={userInfo}
        >
          {SmallProfilePhoto}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: '400px', padding: '20px'}}>
          <Dropdown.Item onClick={handleShow} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/images/bell.png" alt="알림버튼" style={{ width: "30px", height: "30px" }}/>
          </Dropdown.Item>
          <div className="d-flex align-items-center justify-content-center mb-3">
            {BigProfilePhoto}
          </div>
          <Dropdown.Item href="#/action-3" disabled style={{ fontSize: '32px', color: 'black', textAlign: 'center' }}>
            (name)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" disabled style={{ textAlign: 'center' }}>손님</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-5" style={{ fontSize: '20px', color: 'grey', textAlign: 'center' }}>
            로그아웃
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontSize: '32px' }}>
          알림
        </Offcanvas.Title>
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

MyProfile.propTypes = {
  userInfo: PropTypes.bool.isRequired,
};

export default MyProfile;
