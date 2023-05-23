//PointForm.jsx
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PointForm({userPoint}) {
  const [show, setShow] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(0);

  const handleClose = () => setShow(false);

  const handleShow = (value) => {
      setSelectedPoint(value);
      setShow(true);
    }

    //백엔드랑 연동되는 부분
    // [결제하기] 버튼을 누르면 handlePayment() 가 실행됨
    const handlePayment = () => {
      const url = '/process-payment/'; //이 url로 이동함. (이 url은 views.py의 특정 함수를 실행하게함.)
      //보낼 데이터 묶음.
      const data = { 
        selected_point: selectedPoint,
        user_point: userPoint
      };
  
      //요청 시작
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        // 서버로부터의 응답을 처리하고 원하는 동작을 수행하세요.
        console.log("이게 되네???????");
        console.log(result);
      })
      .catch(error => {
        // 에러 처리를 수행하세요.
        console.error('Error:', error);
      });
  
      handleClose();
    }


  return (
    <>
    
    {/* 포인트group */}
    <CardGroup className="text-center">
      <Card>
        <Card.Body>
          <Button onClick={()=>handleShow(1000)}><Card.Title>1,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Button onClick={()=>handleShow(5000)}><Card.Title>5,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Button onClick={()=>handleShow(10000)}><Card.Title>10,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
    </CardGroup>

    
    {/* 모달창 */}
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>포인트 결제</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>기존 포인트 : {userPoint}</p> 
          <p>선택된 포인트 : {selectedPoint}</p>
          <p>충전 후 포인트 : {parseInt(userPoint) + selectedPoint}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePayment}>
            결제하기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default PointForm;