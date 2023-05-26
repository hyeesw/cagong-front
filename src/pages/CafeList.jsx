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
            />
            <Button className="rounded-pill" variant="outline-primary">
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
