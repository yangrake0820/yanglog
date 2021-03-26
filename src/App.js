import React from 'react';
import { Route, Link } from 'react-router-dom';
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
            <div style={{ height: '200px', width: '100%', textAlign: 'center', color: 'red', background: 'green' }}>
                동영상한번?
            </div>
            <hr />
            <Route path="/" exact component={Home} />
            <Route path="/api" component={Api} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/parameter/:username" component={Parameter} />
        </div>
    );
}

export default App;
