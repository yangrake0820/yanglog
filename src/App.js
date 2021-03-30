import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Api from './components/api/Api';
import TodoList from './components/todoLIst/TodoList';
import Home from './components/home/Home';
import Parameter from './components/parameter/Prameter';
import Menu from './components/menu/Menu';

function App() {
    return (
        <div className="all">
            <Menu />
            <hr />

            {/* ROUTE 모음 */}
            <Route path="/" exact component={Home} />
            <Route path="/api" component={Api} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/parameter/:username" component={Parameter} />
        </div>
    );
}

export default App;
