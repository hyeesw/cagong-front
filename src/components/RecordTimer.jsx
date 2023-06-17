import React, { useState } from 'react';

function RecordTimer({ detail }) {
  const [timer, settimer] = useState();

  return (
    <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'mediumpurple' }}>
      {/* {detail.duration} */}
      듀레이션듀레이션
    </div>
    // button
  );
}

export default RecordTimer;
