//PointForm.jsx
import React, { useState } from 'react';
import {Card, CardGroup, Button, Modal} from 'react-bootstrap';
import { getCookie } from '../util/cookie';

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';


function PointForm({userPoint, setUserPoint}) {
  const [show, setShow] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(0);

  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  const id = userInfo.user_id

  const handleClose = () => setShow(false);

  const handleShow = (value) => {
      setSelectedPoint(value);
      setShow(true);
    }

    //백엔드랑 연동되는 부분
    // [결제하기] 버튼을 누르면 handlePayment() 가 실행됨 (onSubmit으로 해야된다는데 이럼 코드가 실행되지 않는 것 같은데...)
    const handlePayment = async (e) => {
      e.preventDefault();
      await axios
        .post(`${API_URL}process_payment/`, {
          selected_point: selectedPoint,
          user_point: userPoint,
          user_id: id,
        },{ headers: { Authorization: `Bearer ${getCookie('access_token')}` } },)
        .then((response) => {
          console.log("안녕?");
          console.log(response);
          //////
          setUserPoint(response.data.current_point);
        })
        .catch((err) => {
          console.log("34번 줄 에러입니다 : ", err);
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