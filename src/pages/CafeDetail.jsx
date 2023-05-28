import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Menu } from '../components';
import axios from 'axios';
import { API_URL } from '../constants';


function CafeDetail() {
    // localhost:3000/cafelist/detail/1 이 들어왔을 떄, cafe_id=1로 저장됨.
    let { cafe_id } = useParams(); 
    //back에 get으로 request를 보내고, back에서 response 받아서 화면 랜더링.
    useEffect(() => {
        axios // axios로 서버에 요청 보내는 부분 시작!
          .post(
            `${API_URL}detail/${cafe_id}/`
          )
          .then((response) => {
            console.log(response.data.cafe_detail); //respone 된 cafe_detail
            console.log(response.data.menu_list); //respone 된 menu_list
            //여기서 usestate로 menu값 변경하는 코드 짜면 될 것 같어!!!!!!!!!
          })
          .catch((err) => {
            console.log('메뉴 리스트 get err : ', err);
          });
    })
    
    /*
    내 생각엔 location이랑 navigate는 안 써도 될 것 같고, 그냥 21번 라인에서 받은 data를 잘 가공하면 될 것 같아!!
    */
    
    
    
    
    // const location = useLocation();
    // const { cafeObj } = location.state;
    // const navigate = useNavigate();

    
    // const [showFullText, setShowFullText] = useState(false);
    
    // useEffect(() => {
    //     setMenus(cafeObj.menu);
    // }, []);

    // const handleShowFullText = () => {
    //     if (!showFullText) {setShowFullText(true)}
    //     else {setShowFullText(false)}
    // }

    // return (
    //     <Container fluid>
    //         <Row>
    //             <Col xs={12} md={6} >
    //                 <div style={{ width: "60%", margin: "0 auto", textAlign: "center" }}>
    //                     <div style={{textAlign: "center"}}>
    //                         <div style={{ width:"100%", aspectRatio: "1/1", backgroundColor: "lightgrey", margin:"30px auto"}}></div> {/* 세로방향 | 가로방향 */}
    //                         <h4>{cafeObj.name}</h4>
    //                         <p style={{color:"grey"}}>{cafeObj.location}</p>
    //                     </div>
    //                     <div style={{width: "100%", color:"grey", textAlign: "left"}}>
    //                         <p className="overflow-text" 
    //                             style={{ whitespace: "nowrap", overflow: "hidden", textoverflow: "ellipsis" }}>
    //                                 {showFullText ? cafeObj.detail : cafeObj.detail.slice(0, 35)} 
    //                                 {cafeObj.detail.length > 35 && ( // 텍스트 길이가 일정 이상인 경우에만 ...과 더보기 링크를 추가
    //                                 <span 
    //                                 className="read-more" 
    //                                 style={{ color: "mediumpurple", cursor: "pointer" }} 
    //                                 onClick={handleShowFullText}>{showFullText ? "닫기" : "...더보기"}</span>
    //                             )}
    //                         </p>
    //                         {/* <img src="/images/call.png" alt="알림버튼" style={{ width: "20px", height: "20px" }}/>
    //                         <p>{cafeObj.phone}</p> */}
    //                     </div>
    //                 </div>
    //             </Col>

    //             <Col xs={12} md={6}>
    //                 <Container fluid style={{marginTop: "30px", marginBottom: "150px"}}>
    //                     <Row xs={1} sm={3} md={5} lg={7} xl={9} xxl={11} className="g-3" style={{ gap: '1rem' }}>
    //                         {menus.map((menu) => (
    //                         <Col key={menu.id} margin="5px">
    //                             <Menu menuObj={menu} />
    //                         </Col>
    //                         ))}
    //                     </Row>
    //                 </Container>
    //             </Col>
    //         </Row>
    //     </Container>
    // )
}

export default CafeDetail;
