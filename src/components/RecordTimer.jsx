import moment from 'moment';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GrPause } from 'react-icons/gr';

import { API_URL } from '../constants';
import { getCookie } from '../util/cookie';

function RecordTimer({ detail, isTimerRunning, setTimerRunning }) {
  const [timer, settimer] = useState();

  const calcDuration = () => {
    const now = moment();
    const newDate = moment(detail.start);
    // console.log('now : ', now, 'new:', newDate);
    return now.diff(newDate);
  };

  const diff = () => {
    const millis = calcDuration();
    const seconds = Math.floor(millis / 1000);
    let h = String(Math.floor(seconds / 3600) % 24);
    let m = String(Math.floor(seconds / 60) % 60);
    let s = String(seconds % 60);

    h = h.length === 1 ? `0${h}` : h;
    m = m.length === 1 ? `0${m}` : m;
    s = s.length === 1 ? `0${s}` : s;

    console.log('calc : ', millis);
    settimer(`${h}:${m}:${s}`);
  };

  useEffect(() => {
    // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
    diff();
    const id = setInterval(() => {
      diff();
    }, 1000);

    // false가 되면 타이머 멈춤
    if (!isTimerRunning) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, []);

  const handleButtonPauseClick = async (e) => {
    const stop = confirm('기록을 종료합니다.');
    if (stop && isTimerRunning) {
      setTimerRunning(false);
      try {
        const response = await axios.put(
          `${API_URL}record/done`,
          { detail_id: detail.id },
          { headers: { Authorization: `Bearer ${getCookie('access_token')}` } },
        );
        console.log('POST 요청 결과:', response);
        location.reload();
      } catch (error) {
        console.error('POST 요청 에러:', error);
        // 에러 처리
      }
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'mediumpurple' }}>{timer}</div>
      {isTimerRunning ? (
        <GrPause size="30" role="button" onClick={handleButtonPauseClick} className="active" />
      ) : null}
    </div>
  );
}

export default RecordTimer;
