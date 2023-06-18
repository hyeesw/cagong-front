/* eslint-disable */
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';

const Menu = ({ menuObj }) => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo')); // 로그인한 유저 객체
  const userPoint = userInfo.point; // 유저포인트

  console.log(menuObj);
  console.log(menuObj.name);

  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleShowOrderModal = () => {
    setShowOrderModal(true);
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };

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
        주문하기
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
                onClick={() => alert('주문완료!')}
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
