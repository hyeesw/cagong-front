import React from 'react';
import {Alert} from 'react-bootstrap';

const SuggestLoginForm = () => {
  return (
    // <Container>
    //   <h1>로그인을 해주세요.</h1>
    // </Container>
        <Alert variant="danger">
          로그인을 하신 후 이용할 수 있습니다.
          <p>
            로그인은 <strong>localhost:3000/signin</strong> 에서 하실 수 있습니다.
          </p>
        </Alert>
        
    
  );
};

export default SuggestLoginForm;
