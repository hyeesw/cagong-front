import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

// records 필드: date, user, duration, start, end, memo

// 해당 날짜
// 공부 시간(크게)
// 공부 시작한 시간 ~ 공부 끝난 시간
// 메모(null일 시 '메모가 없습니다.')

function RecordDetail() {
  return (
    <CardGroup>
      <Card className="shadow mx-3" style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title>
            <div style={{fontSize:"18px"}}>2023.5.29</div>
            <div style={{fontSize:"40px", fontWeight:"bold", color:"mediumpurple"}}>04:31:01</div>
          </Card.Title>
          <Card.Subtitle>
            <div style={{fontWeight:"lighter", color:"grey"}}>9:00:00 ~ 13:31:01</div>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>메모가 없습니다.</p>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default RecordDetail;
