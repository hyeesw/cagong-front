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
  

  return (
    <>
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
          <Button variant="secondary" onClick={handleClose}>
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