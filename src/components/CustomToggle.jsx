import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function CustomToggle({ children, onClick }) {

  const handleClick = (e) => {
    onClick(e);
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
};

export default CustomToggle;
