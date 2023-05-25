import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { removeUser } from '../util/localstorage';
import CustomToggle from './CustomToggle'; // 커스텀 버튼을 생성하는 컴포넌트
import Push from './Push'; // 푸쉬알림 정보가 담길 임시 컴포넌트

function MyProfile({ userInfo }) {
  const navigate = useNavigate();

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => {
    if (userInfo) {
      setShowOffcanvas(true);
    } else {
      alert('로그인 후 이용 가능합니다.'); // 로그인되지 않은 상태에는 canvas 창을 열 수 없고 alert
    }
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    navigate('/signin');
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate('/signup');
  }

  const handleSignoutClick = (e) => {
    e.preventDefault();
    alert('로그아웃 하시겠습니까?');
    removeUser();
    navigate('/');
  };
 
  // 프로필 사진 자리에 들어갈 것
  let SmallProfilePhoto;
  let BigProfilePhoto;
  if (userInfo) { // 로그인된 상태
    SmallProfilePhoto = <div className="circle" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "lightgrey", border: "3px solid green"}}></div>
    BigProfilePhoto = <div className="circle" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "lightgrey", textAlign: "center", border: "4px solid green" }}></div>
  } else {  // 로그인되지 않은 상태
    SmallProfilePhoto = <div className="circle" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "lightgrey" }}></div>
    BigProfilePhoto = <div className="circle" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "lightgrey", textAlign: "center" }}></div>
  }

  return (
    <>
      <Dropdown align="end" style={{ position: 'relative' }}>
        <Dropdown.Toggle
          as={CustomToggle}
          id="dropdown-custom-components"
          userInfo={userInfo}
        >
          {SmallProfilePhoto}
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" style={{ minWidth: '400px', padding: '20px', position: 'absolute', right: 0}}>
          {userInfo 
            ?  // 로그인 O
            <>
              <Dropdown.Item onClick={handleShowOffcanvas} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img src="/images/bell.png" alt="알림버튼" style={{ width: "30px", height: "30px" }}/>
              </Dropdown.Item>
              <div className="d-flex align-items-center justify-content-center mb-3">
                {BigProfilePhoto}
              </div>
              <Dropdown.Item href="#/action-3" disabled style={{ fontSize: '32px', color: 'black', textAlign: 'center' }}>
                {userInfo['username']}  {/* 로그인 후, localStorage에 저장되어있던 userInfo에서, 'username'의 value값 */}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" disabled style={{ textAlign: 'center' }}>손님</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-5" onClick={(e) => handleSignoutClick(e)} style={{ fontSize: '20px', color: 'grey', textAlign: 'center' }}>
                로그아웃
              </Dropdown.Item>
            </>
            :  // 로그인 X
            <>
              <br />
              <Dropdown.Item href="#/action-3" disabled style={{ fontSize: '18px', color: 'grey', textAlign: 'center' }}>
                로그인이 필요한 서비스입니다.
              </Dropdown.Item>
              <br />
              <Dropdown.Divider />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dropdown.Item href="#/action-5" onClick={(e) => handleSignupClick(e)} style={{ fontSize: '20px', color: 'black', textAlign: 'center' }}>
                  회원가입
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5" onClick={(e) => handleSigninClick(e)} style={{ fontSize: '20px', color: 'black', textAlign: 'center' }}>
                  로그인
                </Dropdown.Item>
              </div>
            </>
          }
        </Dropdown.Menu>
      </Dropdown>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontSize: '26px' }}>
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
