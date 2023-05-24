//PointForm.jsx
import React, { useState } from 'react';
import {Card, CardGroup, Button, Modal} from 'react-bootstrap';
import { getCookie } from '../util/cookie';

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';


function PointForm({userID, userPoint, setUserPoint, setUserChanged}) {
  const [show, setShow] = useState(false); //모달 show, close 상태
  const [selectedPoint, setSelectedPoint] = useState(0); //선택된 포인트

  //모달 close 함수
  const handleClose = () => setShow(false); 
  //모달 show 함수 (value: 선택된 값)
  const handleShow = (value) => {
      setSelectedPoint(value);
      setShow(true);
    }

    //백엔드랑 연동되는 부분
    // [결제하기] 버튼을 누르면 handlePayment() 실행됨.
    const handlePayment = async (e) => {
      e.preventDefault();
      await axios
        .post(`${API_URL}process_payment/`, {  //백엔드의 url 요청과 보낼 data 객체 
          selected_point: selectedPoint,
          user_point: userPoint,
          user_id: userID,
        },
        // hearder를 설정해줌으로서 token이 있는 사람(로그인된 사람)만 기능을 사용할 수 있도록
        { headers: { Authorization: `Bearer ${getCookie('access_token')}` } },)
        .then((response) => { //백엔드에서 response 받는 부분
          //setUserPoint는 Point.jsx에서 인자로 넘어온 setter이므로, 얘로 userPoint값 바꾸면, 페이지가 자동 렌더링되며, Point.jsx에도 반영이 된다!!
          setUserPoint(response.data.current_point); 
          setUserChanged(true); //localstorage의 userInfo 객체의 Point를 업데이트 해야된다고 표시해둠! (이후 Point.jsx의 20번 라인에서 업데이트 됨)
        })
        .catch((err) => { //에러 잡는 구문
          console.log("41번 줄 에러입니다 : ", err);
        });
        handleClose(); //모달 창 닫기
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