import React, { useState, useEffect } from 'react';
import './Point.css';
import img1 from './assets/point_1000.png';
import img2 from './assets/point_5000.png';
import img3 from './assets/point_10000.png';
import img4 from './assets/pay_nonActive.png';

function Point() {
  // const [selectedPoint, setSelectedPoint] = useState(); // 현재 선택된 point

  // const pointClicked = (id) => {
  //   // id에 해당하는 hover의 테두리를 bold 처리하고, cur_point에 해당 id를 넣는다.
  //   const num = Number(id.substr(5,6)); //point1
  //   setSelectedPoint(num);
  //   for (let i = 1; i <= 3; i += 1) {
  //     if (id === i) document.querySelector(i).style.border = '5px solid red';
  //     else document.querySelector(i).style.border = '0px';
  //   }
  //   return curPoint;
  // };

  // const [activePoint, setActivePoint] = useState(); // 현재 선택된 point
  // const [deactivePoint, setDeactivePoint] = useState(null); // 과거 선택된 point

  // useEffect(() => {
  //   const pointClicked = (id) => {
  //     // id = point1
  //     setActivePoint(id);
  //     if (deactivePoint != null) {
  //       document.querySelector(deactivePoint).style.border = '0px'; // 이전값 border 해제
  //     }
  //     document.querySelector(activePoint).style.border = '5px solid red'; // 현재값 border ON.
  //     setDeactivePoint(activePoint); // 이전값을 현재값과 동일하게 설정.
  //   };
  // }, []);
  

  // const payClicked = () => {
  //   //cur_point를 이용해 팝업창을 연동시킨다. (팝업창에 값을 넘기고)
  // }

  return (
    <div>
      <div className="main_content">
        <div className="main_content_header">
          <div className="main_content_header_title">충전하기</div>
          <div className="main_content_header_msg">충전 금액을 선택해주세요.</div>
        </div>
        <div className="main_content_main">
          <div className="main_content_main_1">hyeesw 님의 현재 point 4000</div>
          <div className="main_content_main_2">
            <button type="button" id="point1">
              <div className="point_hover">
                <img className="point_img" src={img1} alt="point_img" />
              </div>
            </button>
            <button type="button" id="point2">
              <div className="point_hover">
                <img className="point_img" src={img2} alt="point_img" />
              </div>
            </button>
            <button type="button" id="point3">
              <div className="point_hover">
                <img className="point_img" src={img3} alt="point_img" />
              </div>
            </button>
          </div>
          <div className="main_content_main_3">
            <a href="/">
              <img src={img4} alt="point_img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Point;
