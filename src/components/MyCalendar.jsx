import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Calendar from 'react-calendar';
import moment from 'moment/moment';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css';
import { Row, Col } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../constants';
import { getCookie } from '../util/cookie';

import RecordDetail from './RecordDetail';
import { getUser } from '../util/localstorage';

const dot = (date, view, mark, duration) => {
  // 날짜 타일에 컨텐츠 추가하기 (html 태그)
  // 추가할 html 태그를 변수 초기화
  const html = [];
  // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
  mark.forEach((x) => {
    if (x === moment(date).format('YYYY-MM-DD')) {
      html.push(
        <span className="duration text-warning" key={x} style={{ fontSize: '10px' }}>
          {duration[mark.indexOf(x)]}
        </span>,
      );
    }
  });
  // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
  return <div className="duration-box absoluteDiv text-left w-100">{html}</div>;
};

function MyCalendar() {
  const [value, setvelue] = useState(new Date());
  const [records, setrecords] = useState([]);
  const [mark, setMark] = useState([]); // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태
  const [duration, setduration] = useState([]); // ["00:00:00", "1 22:33:55", "00:44:55"] 형태

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('records', records);
  // }, [records]);

  const getMarks = async (userInfo) => {
    const accessToken = getCookie('access_token');
    const result = await axios
      .get(`${API_URL}record/record_list/${userInfo.userID}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        // 레코드가 있으면 레코드 리스트 반환
        if (res.data.record_list.length) {
          setrecords(res.data.record_list);
          return res.data.record_list;
        }
        // 레코드 없으면 빈배열 반환
        return [];
      })
      .catch((err) => {
        console.log(err);
      });

    if (result.length) {
      setMark([
        ...result.map((item) => {
          return item.date;
        }),
      ]);
      setduration([
        ...result.map((item) => {
          return item.duration.split('.')[0];
        }),
      ]);
    }
  };

  const init = async () => {
    const userInfo = await getUser();
    if (!userInfo) {
      // console.log('회원정보가 없거나 토큰무효');
      alert('로그인이 필요합니다.');
      navigate('/signin');
      return;
    }
    getMarks(userInfo);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Row className="justify-content-md-center py-3 ">
      <Col md="auto">
        <div style={{ display: 'inline-block' }}>
          <Calendar
            className="mx-3 text-sm border-b flex"
            onChange={setvelue} // 포커스 변경시 현재날짜 받아오기
            formatDay={(locale, date) => moment(date).format('DD')} // 숫자만 보이기
            value={value}
            // showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            tileContent={({ date, view }) => dot(date, view, mark, duration)}
          />
          {/* <div className="text-gray-500 mt-4">{moment(value).format('YYYY년 MM월 DD일')}</div> */}
        </div>
      </Col>
      <Col md="auto">
        <div style={{ display: 'inline-block' }}>
          <RecordDetail value={value} records={records} />
        </div>
      </Col>
    </Row>
  );
}

export default MyCalendar;
