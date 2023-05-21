import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function CustomToggle({ children, onClick, userInfo }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!userInfo) {
      alert('로그인 후 이용해주세요.');
      navigate('/signin');
    } else {
      onClick(e);
    }
  };

  return (
    <Button variant="link" onClick={handleClick}>
      {children}
    </Button>
  );
}

CustomToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  userInfo: PropTypes.bool.isRequired,
};

export default CustomToggle;
