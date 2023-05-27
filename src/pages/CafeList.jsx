 /* eslint-disable */
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";

//백엔드에 필요한 것들
import axios from 'axios';
import { API_URL } from '../constants';


function CardArray(dataArray) {
  console.log("---------시작----------")

  const [dataArray1, setDataArray] = useState(Object.values(dataArray));
  console.log("아이템: ",dataArray1)
  console.log("아이템: ",dataArray1[0])

    return(
        <Container>
            {
                  dataArray1.length>0 && dataArray1.map((idx)=>{
                  console.log(dataArray1[0])
                  // console.log("이름: ", item.name)
                  // console.log("위치: ",item.location)
                  // console.log("안내: ",item.info)

                    return (
                      <Link to="/">
                        <Card key={idx}>
                          <Row>
                            <Col>
                            <Card.Body>
                              <Card.Title sm={4}>{}</Card.Title>
                              <Card.Text sm={4}>
                                <h5>{}</h5>
                                {}
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
          console.log("json 결과!")
          console.log("첫번째 아이템", result.item0)
          console.log("타입: ", Object.values(result))
          setDataArray(result)
          /*
          dataArray = [
          0: {name: 'cafe_A', location: 'Seoul, korea', info: 'Korea NO.1', owner: null},
          1:{name: 'cafe_B', location: 'Incheon, korea', info: 'Korea NO.2', owner: null},
          2:{name: 'cafe_C', location: 'Daejeon, korea', info: 'Korea NO.3', owner: null},
          3:{name: 'cafe_D', location: 'Busan, korea', info: 'Korea NO.4', owner: null},
          4:{name: 'cafe_E', location: 'Ulsan, korea', info: 'Korea No.5', owner: null}]
          */
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
