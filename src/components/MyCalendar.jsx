import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment/moment';

function MyCalendar() {
  const [value, setvelue] = useState(new Date());

  return (
    <div className="p-5">
      <Calendar
        onChange={setvelue} // 포커스 변경시 현재날짜 받아오기
        formatDay={(locale, date) => moment(date).format('DD')} // 숫자만 보이기
        value={value}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      />
      <div className="text-gray-500 mt-4">{moment(value).format('YYYY년 MM월 DD일')}</div>
    </div>
  );
}

export default MyCalendar;
