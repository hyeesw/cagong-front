import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { RecordTimer } from '../components';

// records 필드: date, user, duration, start, end, memo

// 해당 날짜
// 공부 시간(크게)
// 공부 시작한 시간 ~ 공부 끝난 시간
// 메모(null일 시 '메모가 없습니다.')

function RecordDetail({ value, records }) {
  const [detail, setdetail] = useState({});
  const [isTimerRunning, setTimerRunning] = useState(false);

  // console.log('value', moment(value).format('YYYY-MM-DD'), 'records', { ...records[0] }.date);

  useEffect(() => {
    let isChanged = false;
    records.forEach((record) => {
      if (moment(value).format('YYYY-MM-DD') === { ...record }.date) {
        // console.log('same!!', 'record:', record);
        isChanged = true;
        setdetail({
          id: record.id,
          date: moment(value).format('YYYY-MM-DD'),
          duration: record.duration.split('.')[0],
          start: record.start,
          end: record.end,
          memo: record.memo,
        });
      }
      if (!isChanged) {
        setdetail({ date: moment(value).format('YYYY-MM-DD') });
      }
    });
  }, [value]);

  useEffect(() => {
    setTimerRunning(detail.duration === '00:00:00');
  }, [detail]);

  return (
    <CardGroup>
      <Card className="shadow mx-3" style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title>
            <div style={{ fontSize: '18px' }}>{detail.date}</div>
            {(() => {
              if (detail.duration) {
                if (isTimerRunning) {
                  return (
                    <RecordTimer
                      detail={detail}
                      isTimerRunning={isTimerRunning}
                      setTimerRunning={setTimerRunning}
                    />
                  );
                }
                return (
                  <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'mediumpurple' }}>
                    {detail.duration}
                  </div>
                );
              }
              return (
                <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'grey' }}>00:00:00</div>
              );
            })()}
          </Card.Title>
          <Card.Subtitle>
            <div style={{ fontWeight: 'lighter', color: 'grey' }}>
              {detail.start
                ? `${moment(detail.start).format('a h:mm:ss')} ~ 
                ${moment(detail.end).format('a h:mm:ss')}`
                : null}
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
