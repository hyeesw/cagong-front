import React from 'react';
import Card from 'react-bootstrap/Card';

function Push({ noti }) {
  return (
    <div className="d-flex mb-2">
      <div
        className="circle"
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          backgroundColor: 'lightgrey',
          border: '2px solid green',
          top: '0',
        }}
      />
      <Card style={{ marginLeft: '10px', width: '330px' }}>
        <Card.Body>
          <Card.Title>{noti.title}</Card.Title>
          <Card.Text>{noti.msg}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{noti.send_at}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Push;
