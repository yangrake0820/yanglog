import React from 'react';

// 파라미터 연습 데이터
const profileData = {
    velopert: {
        name: '김민준 개발자님',
        description: '출처 : https://react.vlpt.us/react-router/02-params-and-query.html',
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공',
    },
    yangrake: {
        name: 'yanglog',
        description: '뉴비 개발자',
    },
};

const Parameter = ({ match }) => {
    // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조 합니다.
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Parameter;
