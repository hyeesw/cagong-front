import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

// records 필드: date, user, duration, start, end, memo

// 해당 날짜
// 공부 시간(크게)
// 공부 시작한 시간 ~ 공부 끝난 시간
// 메모(null일 시 '메모가 없습니다.')

function RecordDetail({ value, records }) {
  const [detail, setdetail] = useState({});

  // console.log('value', moment(value).format('YYYY-MM-DD'), 'records', { ...records[0] }.date);

  useEffect(() => {
    let isChanged = false;
    records.forEach((record) => {
      if (moment(value).format('YYYY-MM-DD') === { ...record }.date) {
        // console.log('same!!', 'record:', record);
        isChanged = true;
        setdetail({
          date: moment(value).format('YYYY-MM-DD'),
          duration: record.duration.split('.')[0],
          start: moment(record.start).format('a h:mm:ss'),
          end: moment(record.end).format('a h:mm:ss'),
          memo: record.memo,
        });
      }
      if (!isChanged) {
        setdetail({ date: moment(value).format('YYYY-MM-DD') });
      }
    });
  }, [value]);

  // useEffect(() => {
  //   console.log(detail);
  // }, [detail]);

  return (
    <CardGroup>
      <Card className="shadow mx-3" style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title>
            <div style={{ fontSize: '18px' }}>{detail.date}</div>
            {detail.duration ? (
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'mediumpurple' }}>
                {detail.duration}
              </div>
            ) : (
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'grey' }}>00:00:00</div>
            )}
          </Card.Title>
          <Card.Subtitle>
            <div style={{ fontWeight: 'lighter', color: 'grey' }}>
              {detail.start} ~ {detail.end}
            </div>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>{detail.memo ? detail.memo : '메모가 없습니다.'}</p>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default RecordDetail;
