 /* eslint-disable */
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';


function CardArray() {
    const [dataArray, setDataArray] = useState(['해물찜', '라면', '스시', '육회']);
    return(
        <Container>
            {
                dataArray.map((content, idx)=>{
                    return (
                      <Link to="/">
                        <Card key={idx}>
                          <Row>
                            <Col>
                            <Card.Body>
                              <Card.Title sm={4}>{content}</Card.Title>
                              <Card.Text sm={4}>
                                <h5>서울시 관악구 정릉동</h5>
                                cafeInfocafeInfocafeInfocafeInfocafeInfocafeInfo
                              </Card.Text>
                            </Card.Body>
                            </Col>
                            <Col>
                              <img src={require("./assets/point_1000.png")} width="90%" alt="img"/>
                            </Col>
                          </Row>
                        </Card>
                      </Link>
                    )
                })
            }
        </Container>
    );
  }

function CafeList() {
  const [searchValue, setSearchValue] = useState(""); //검색값

  const countries = [

    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  
  ];

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
          console.log("json 결과!")
          console.log(result)
        }
        //백엔드에서 response 받는 부분
        //setUserPoint는 Point.jsx에서 인자로 넘어온 setter이므로, 얘로 userPoint값 바꾸면, 페이지가 자동 렌더링되며, Point.jsx에도 반영이 된다!!
        // setUserPoint(response.data.current_point); 
        // setUserChanged(true); //localstorage의 userInfo 객체의 Point를 업데이트 해야된다고 표시해둠! (이후 Point.jsx의 20번 라인에서 업데이트 됨)
      }).catch((err) => { 
        //에러 잡는 구문
        console.log("90번 줄 에러입니다 : ", err);
      });

    // if(searchValue.length > 0) {
    //   //일치하는 값 찾는 내용 (아마도 서버로)
    //   countries.filter((country) => {
    //     console.log(country.name.match(searchValue));
    //     console.log('값은 : ', searchValue)
    //   });
    // }
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
    <CardArray></CardArray>
    </>
  );
}

export default CafeList;
