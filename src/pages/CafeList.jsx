/* eslint-disable */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from 'react-bootstrap';

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';

function CardArray(parmData) {
  const data = parmData.parmData; //꺼내기

  if (data.length == 0) {
    // console.log('빈 배열!');
    return;
  } else {
    const valueList = Object.values(data);
    // console.log('배열 !!!', valueList);

    // localhost:3000/cafelist/detail/1 호출
    const tags = valueList.map((item, idx) => (
      <Link to={`/cafelist/detail/${item.id}/`}>
        <Card key={idx}>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title sm={4}>{item.name}</Card.Title>
                <Card.Text sm={4}>
                  <span>{item.location}</span>
                  {item.info}
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              {/* <img src={require("./assets/point_1000.png")} width="90%" alt="img"/>  //이미지가 들어갈 자리 */}
            </Col>
          </Row>
        </Card>
      </Link>
    ));

    return <Container>{tags}</Container>;
  }
}

function CafeList() {
  const [searchValue, setSearchValue] = useState(''); //검색값
  const [searchedList, setSearchedList] = useState([]);

  //검색창의 값이 바뀔 때마다 실행됨. (검색값 저장)
  const handleChange = (e) => {
    e.preventDefault();
    // console.log('handleChange() 불려짐');
    setSearchValue(e.target.value);
  };

  //[검색] 버튼 눌렀을 때 handleClick() 실행됨. (데이터 전송)
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // console.log('handleClick() 불려짐');
    // console.log(searchValue);
    await axios //axios로 서버에 요청 보내는 부분 시작!
      .post(`${API_URL}cafe_list/`, {
        //백엔드의 url 요청과 보낼 data 객체
        search_value: searchValue,
      })
      .then((response) => {
        console.log(response.data.search_result);

        if (response.data.search_result === 'null') {
          console.log('검색 결과가 없습니다.');
        } else {
          let jsonResult = JSON.parse(response.data.search_result);
          setSearchedList(jsonResult); //객체가 저장됨
        }
      })
      .catch((err) => {
        console.log('axios post cafe_list', err);
      });
  };

  return (
    <>
      {/* 검색창 */}
      <Container className="mt-5">
        <Row>
          <Col>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
                id="inputValue"
                onChange={handleChange}
                value={searchValue}
              />
              <Button type="submit" className="rounded-pill" variant="outline-primary">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* 카드 group */}
      {/* <Container> */}
      <CardArray parmData={searchedList}></CardArray>
      {/* </Container>     */}
    </>
  );
}

export default CafeList;
