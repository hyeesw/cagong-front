import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function CustomToggle({ children, onClick }) {
  return (
    <Button
      variant="link"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Button>
  );
}

CustomToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomToggle;
