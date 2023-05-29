/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../constants';
import { Menu } from '../components';
import { getUser } from '../util/localstorage';

function CafeDetail() {
  const [cafeObj, setcafeObj] = useState({});
  const [menus, setmenus] = useState([]);
  // localhost:3000/cafelist/detail/1 이 들어왔을 떄, cafeId=1로 저장됨.
  const { cafeId } = useParams();
  const navigate = useNavigate();

  const getCafeDetail = async () => {
    const result = await axios // axios로 서버에 요청 보내는 부분 시작!
      .post(`${API_URL}cafe/detail/${cafeId}/`)
      .then((response) => {
        // console.log('cafe_detail', response.data.cafe_detail);
        // console.log('menu_list', response.data.menu_list);
        setcafeObj(JSON.parse(response.data.cafe_detail));
        setmenus([...response.data.menu_list]);
      })
      .catch((err) => {
        console.log('카페상세 get err : ', err);
      });
    return result;
  };

  const init = async () => {
    const userInfo = await getUser();
    if (!userInfo) {
      // console.log('회원정보가 없거나 토큰무효');
      alert('로그인이 필요합니다.');
      navigate('/signin');
      return;
    }
    console.log('init');
    await getCafeDetail();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <div style={{ width: '60%', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80%',
                  aspectRatio: '1/1',
                  backgroundColor: 'lightgrey',
                  margin: '30px auto',
                }}
              />
              {/* 세로방향 | 가로방향 */}
              <h4>{cafeObj.name}</h4>
              <p style={{ color: 'grey' }}>{cafeObj.location}</p>
            </div>
            <div style={{ width: '100%', color: 'grey', textAlign: 'left' }}>
              <p
                className="overflow-text"
                style={{ whitespace: 'nowrap', overflow: 'hidden', textoverflow: 'ellipsis' }}
              >
                {cafeObj.info}
              </p>
              <img
                src="/images/call.png"
                alt="알림버튼"
                style={{ width: '20px', height: '20px' }}
              />
              <p>{cafeObj.phone}</p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Container fluid style={{ marginTop: '30px', marginBottom: '150px' }}>
            <Row
              xs={1}
              sm={3}
              md={5}
              lg={7}
              xl={9}
              xxl={11}
              className="g-3"
              style={{ gap: '1rem' }}
            >
              {menus.map((menu) => (
                <Col key={menu.id} margin="5px">
                  <Menu menuObj={menu} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CafeDetail;
