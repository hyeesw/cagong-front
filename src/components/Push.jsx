import React from 'react';

function Push() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/profile.jpg" alt="프로필 이미지" style={{ width: '35px', height: '35px' }} />
                <div style={{ marginLeft: '10px' }}>
                    <div>(알림 내용)</div>
                    <div style={{ color: "grey" }}>(알림 시각)</div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Push;