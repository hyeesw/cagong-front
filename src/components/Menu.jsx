/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';

// 백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';
import { getCookie } from '../util/cookie';

//Menu는 단일 객체임. (여러 객체가 담긴게 아님.)
const Menu = ({ menuObj }) => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo')); // 로그인한 유저 객체
  const [userPoint, setUserPoint] = useState(0); // 선택된 포인트

  const getUserDB = async (userID) => {
    await axios // axios로 서버에 요청 보내는 부분 시작!
      .post(
        `${API_URL}get_user/`,
        {
          // 백엔드의 url 요청과 보낼 data 객체
          user_id: userID,
        },
        {
          headers: { Authorization: `Bearer ${getCookie('access_token')}` },
        },
      )
      .then((response) => {
        setUserPoint(response.data.point)
      })
      .catch((err) => {
        console.log('Menu.jsx userDB 가져오기 실패 : ', err);
      });
  }
  //최소 렌더링시에 1번만 실행됨
  useEffect(()=>{
    getUserDB(userInfo.userID)
  }, [])


  console.log('메뉴 객체 : ',menuObj);
  console.log(menuObj.name);

  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleShowOrderModal = () => {
    setShowOrderModal(true);
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };

  // [주문하기] 눌렀을 때 sendRequest() 실행됨. 
  const sendRequest = async (menu_id) => {
    console.log('여기까지 왔습니다.')
    console.log(menu_id);

    await axios // axios로 서버에 요청 보내는 부분 시작!
      .post(
        `${API_URL}order/`,
        {
          // 백엔드의 url 요청과 보낼 data 객체
          user_id: userInfo.userID,
          menu_id: menu_id,
        },
        {
          headers: { Authorization: `Bearer ${getCookie('access_token')}` },
        },
      )
      .then((response) => {
        console.log('response를 받았습니다 !', response.data);
        setUserPoint(response.data.renewed_point) //화면상에서 보여지는 point 값 수정
      })
      .catch((err) => {
        console.log('46번줄 err : ', err);
      });
  }

  return (
    <div>
      {/* 메뉴 표시: Card 사용 */}
      <Card
        style={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          border: 'none',
        }}
      >
        {/* 이미지 표시 */}
        <div style={{ aspectRatio: '1/1', backgroundColor: 'lightgrey' }}></div>
        <Card.Body>
          <Card.Title style={{ fontSize: '18px' }}>{menuObj.name}</Card.Title>
          <Card.Text style={{ fontSize: '16px', color: 'mediumpurple' }}>{menuObj.price}원</Card.Text>
        </Card.Body>
      </Card>
      <button
        style={{
          width: '100%',
          height: '100%',
          color: 'grey',
          borderColor: 'lightgrey',
          borderWidth: '1px',
        }}
        onClick={handleShowOrderModal}
      >
        선택하기
      </button>

      {showOrderModal && ( // showOrderModal 상태에 따라 모달 창 렌더링
        <Modal show={showOrderModal} onHide={handleCloseOrderModal} size="lg">
          <Modal.Header>
            <h4>주문하시겠습니까?</h4>
          </Modal.Header>
          <Modal.Body style={{ display: 'flex' }}>
            메뉴: {menuObj.name} <br />
            가격: {menuObj.price}원 <br />
            <br />
            현재 보유 중인 포인트: {userPoint}
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {alert('주문완료!'); handleCloseOrderModal(); sendRequest(menuObj.id);}}
                style={{ marginRight: '10px' }}
              >
                주문하기
              </Button>
              <Button variant="secondary" type="button" onClick={handleCloseOrderModal}>
                닫기
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Menu;
