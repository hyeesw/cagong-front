import React, { useState } from 'react';
import { GrPlay, GrPause } from "react-icons/gr";

function RecordTimer({ detail }) {
  const [timer, settimer] = useState();

  const [isTimerRunning, setTimerRunning] = useState(false);

  const handleTimerRunning = () => {
    if (isTimerRunning) {
      setTimerRunning(false);
    } else {
      setTimerRunning(true);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '40px', fontWeight: 'bold', color: 'mediumpurple' }}>
          {/* {detail.duration} */}
          듀레이션듀레이션
        </div>
        {isTimerRunning ? (
          <GrPause style={{ marginLeft:'15px' }} size="30" onClick={handleTimerRunning} />
        ) : (
          <GrPlay style={{ marginLeft:'15px' }} size="30" onClick={handleTimerRunning} />
        )}
      </div>
    </>
  );
}

export default RecordTimer;
