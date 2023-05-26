 /* eslint-disable */
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";

function CardArray() {
    let [dataArray, setDataArray] = useState(['해물찜', '라면', '스시', '육회']);
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
    console.log('불려짐')
    setSearchValue(e.target.value);
  }

  //[검색] 버튼 눌렀을 때 실행됨. (데이터 전송)
  const handleClick = (e) => {
    e.preventDefault();
    if(searchValue.length > 0) {
      //일치하는 값 찾는 내용 (아마도 서버로)
      countries.filter((country) => {
        console.log(country.name.match(searchValue));
        console.log('값은 : ', searchValue)    
      });
    }
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
