import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function CustomToggle({ children, onClick, className }) {

  const handleClick = (e) => {
    onClick(e);
  };

  return (
    <Button variant="link" onClick={handleClick} className={className}>
      {children}
    </Button>
  );
}

CustomToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
};

export default CustomToggle;
