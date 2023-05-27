import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Menu } from '../components';

// 카페목록 페이지에서 onClick={() => navigate('/cafedetail', { state: { cafeObj } })}하면 연결되는 페이지. 이때 cafeObj의 형태는 다음과 같음
/* const cafeObj = { 
    'name': '카페123', 'location': '서울시 관악구 정릉동', 
    'detail': 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ', 
    XXX'phone': '010-1234-5678',XXX 
    'menu': [
        {'name': '카페라떼', 'price': '4000원'},
        {'name': '아메리카노', 'price': '3000원'},
        {'name': '카푸치노', 'price': '4500원'},
        {'name': '카라멜 마끼아또', 'price': '5000원'},
        {'name': '바닐라 라떼', 'price': '4500원'},
        {'name': '에스프레소', 'price': '3500원'},
        {'name': '카페모카', 'price': '4500원'},
        {'name': '녹차 라떼', 'price': '4000원'},
        {'name': '자몽 에이드', 'price': '4000원'},
        {'name': '딸기 스무디', 'price': '5000원'},
        {'name': '망고 주스', 'price': '4500원'}
    ] 
};
라고 생각하고 짰음 */

function CafeDetail() {
    const location = useLocation();
    const { cafeObj } = location.state;
    const navigate = useNavigate();

    const [menus, setMenus] = useState([]);
    
    const [showFullText, setShowFullText] = useState(false);
    
    useEffect(() => {
        setMenus(cafeObj.menu);
    }, []);

    const handleShowFullText = () => {
        if (!showFullText) {setShowFullText(true)}
        else {setShowFullText(false)}
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} >
                    <div style={{ width: "60%", margin: "0 auto", textAlign: "center" }}>
                        <div style={{textAlign: "center"}}>
                            <div style={{ width:"100%", aspectRatio: "1/1", backgroundColor: "lightgrey", margin:"30px auto"}}></div> {/* 세로방향 | 가로방향 */}
                            <h4>{cafeObj.name}</h4>
                            <p style={{color:"grey"}}>{cafeObj.location}</p>
                        </div>
                        <div style={{width: "100%", color:"grey", textAlign: "left"}}>
                            <p className="overflow-text" 
                                style={{ whitespace: "nowrap", overflow: "hidden", textoverflow: "ellipsis" }}>
                                    {showFullText ? cafeObj.detail : cafeObj.detail.slice(0, 35)} 
                                    {cafeObj.detail.length > 35 && ( // 텍스트 길이가 일정 이상인 경우에만 ...과 더보기 링크를 추가
                                    <span 
                                    className="read-more" 
                                    style={{ color: "mediumpurple", cursor: "pointer" }} 
                                    onClick={handleShowFullText}>{showFullText ? "닫기" : "...더보기"}</span>
                                )}
                            </p>
                            {/* <img src="/images/call.png" alt="알림버튼" style={{ width: "20px", height: "20px" }}/>
                            <p>{cafeObj.phone}</p> */}
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <Container fluid style={{marginTop: "30px", marginBottom: "150px"}}>
                        <Row xs={1} sm={3} md={5} lg={7} xl={9} xxl={11} className="g-3" style={{ gap: '1rem' }}>
                            {menus.map((menu) => (
                            <Col key={menu.id} margin="5px">
                                <Menu menuObj={menu} />
                            </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default CafeDetail;
