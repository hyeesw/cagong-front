import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getUser } from '../util/localstorage';
import CustomToggle from './CustomToggle';
import MyProfile from './MyProfile';
import '../css/Header.css';

const phrases = [
  "오늘 하루도 화이팅!",
  "계속해서 멋진 결과를 이루어내세요!",
  "오늘도 최선을 다하는 당신, 자신을 믿고 더 나아가세요!",
  "성공은 생각보다 가까이에 있을 거예요!",
  "어려움이 닥쳤을 때 포기하지 말고, 도전의 의미를 되새겨보세요.",
  "이길 수 있습니다!",
  "언제나 새로운 도전을 위해 노력하는 당신, 저희가 응원합니다!",
  "성공은 지금까지의 노력의 결과입니다. 계속해서 나아가세요!",
  "자신의 잠재력을 믿고, 꿈을 향해 전진해보세요.",
  "오늘도 환상적인 일을 이루어내세요!"
];

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function Header() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUser();
      setUserInfo(user);
    };
    fetchUserInfo();
  }, []);

  const randomPhrase = getRandomPhrase();

  return (
    <Nav defaultActiveKey="link-0" className="header">
      {/* 홈 페이지 */}
      <Nav.Item className="header-logo">
        <Nav.Link href="/" eventKey="link-0">
          <img
            src="/images/header-logo-no-background.png"
            alt="Home Button"
            style={{ height: '50px' }}
          />
        </Nav.Link>
      </Nav.Item>

      {/* 검색 */}
      {/* <Nav.Item className="header-search">(검색 창 들어갈 자리)</Nav.Item> */}
      {/* 임시: 랜덤한 응원문구 출력 */}
      <Nav.Item className="header-search">{randomPhrase}</Nav.Item>
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
