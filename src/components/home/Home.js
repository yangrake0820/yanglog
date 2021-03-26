import React from 'react';

const checkUrl = () => {
    var link = document.location.href;
    if (link === 'https://yangrake0820.github.io/yanglog/') {
        return true;
    } else {
        return false;
    }
};

const Home = () => {
    let test = checkUrl();
    return (
        <div>
            {test && (
                <div style={{ height: '200px', width: '100%', textAlign: 'center', color: 'red', background: 'green' }}>
                    동영상한번?
                </div>
            )}
            <h1>홈</h1>
            <p>이곳은 홈이에요, 가장 먼저 보여지는 페이지죠</p>
        </div>
    );
};

export default Home;
