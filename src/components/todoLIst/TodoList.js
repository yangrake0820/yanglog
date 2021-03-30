import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';
import TodoLists from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './hooks/TodoContext';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

const TodoList = () => {
    return (
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoLists />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    );
};

export default TodoList;
