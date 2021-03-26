import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div .test {
        background-color: black;
        height: 100vh;
    }
`;

const Account = () => {
    return (
        <div className="test">
            <GlobalStyle />
            <h1>가계부</h1>
            <p>이곳은 가계부 곧 보여드리죠</p>
        </div>
    );
};

export default Account;
