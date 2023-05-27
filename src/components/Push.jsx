import React from 'react';

function Push() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          className="circle"
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            backgroundColor: 'lightgrey',
            border: '2px solid green',
          }}
        />
        <div style={{ marginLeft: '10px' }}>
          <div>(알림 내용)</div>
          <div style={{ color: 'grey' }}>(알림 시각)</div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Push;
