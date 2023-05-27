 /* eslint-disable */
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';


function CardArray(dataArray) {
  console.log("---------시작----------")
  
  const key_list = Object.keys(dataArray.dataArray)
  console.log("들어온 데이타: ", dataArray.dataArray)
  console.log("키 리스트: ",key_list)
  
  for(let i=0; i<key_list.length; i++){
    const key = key_list[i];
    const value = dataArray.dataArray[key];
    console.log("출력되자?^^",value)
  }
  // const [dataArray1, setDataArray] = useState(Object.values(dataArray));
  // console.log("아이템: ",dataArray1)
  // console.log("아이템: ",dataArray1[0])

  //   return(
  //       <Container>
  //           {
  //                 dataArray1.length>0 && dataArray1.map((idx)=>{
  //                 console.log(dataArray1[0])
  //                 // console.log("이름: ", item.name)
  //                 // console.log("위치: ",item.location)
  //                 // console.log("안내: ",item.info)

  //                   return (
  //                     <Link to="/">
  //                       <Card key={idx}>
  //                         <Row>
  //                           <Col>
  //                           <Card.Body>
  //                             <Card.Title sm={4}>{}</Card.Title>
  //                             <Card.Text sm={4}>
  //                               <h5>{}</h5>
  //                               {}
  //                             </Card.Text>
  //                           </Card.Body>
  //                           </Col>
  //                           <Col>
  //                             <img src={require("./assets/point_1000.png")} width="90%" alt="img"/>
  //                           </Col>
  //                         </Row>
  //                       </Card>
  //                     </Link>
  //                   )
  //               })
  //           }
  //       </Container>
  //   );
  }

function CafeList() {
  const [searchValue, setSearchValue] = useState(""); //검색값
  const [dataArray, setDataArray] = useState([]);

  //검색창의 값이 바뀔 때마다 실행됨. (검색값 저장)
  const handleChange = (e) => {
    e.preventDefault();
    console.log('handleChange() 불려짐')
    setSearchValue(e.target.value);
  }

  //[검색] 버튼 눌렀을 때 handleClick() 실행됨. (데이터 전송)
  const handleClick = async (e) => {
    e.preventDefault();
    console.log('handleClick() 불려짐')
    console.log(searchValue)
    await axios //axios로 서버에 요청 보내는 부분 시작!
      .post(`${API_URL}cafe_list/`, {  //백엔드의 url 요청과 보낼 data 객체 
        search_value: searchValue,
      }).then((response) => { 
        console.log(response.data.search_result)
        
        if(response.data.search_result === "null") {
          console.log("검색 결과가 없습니다.")
        } else{
          let result = JSON.parse(response.data.search_result);
          console.log("아니왜!!!!!!!!!!!!!!", result)
          setDataArray(result) //객체가 저장됨
        }
      }).catch((err) => { 
        //에러 잡는 구문
        console.log("90번 줄 에러입니다 : ", err);
      });
  }


  return (
    <>
    {/* 검색창 */}
    <Container className="mt-5">
      <Row>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              id="inputValue"
              onChange={handleChange}
              value={searchValue}
            />
            <Button type="submit" className="rounded-pill" variant="outline-primary" onClick={handleClick} >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    {/* 카드 group */}
    <CardArray dataArray={dataArray}></CardArray>
    </>
  );
}

export default CafeList;
