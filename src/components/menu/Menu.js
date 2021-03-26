import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/api">API</Link>
                </li>
                <li>
                    <Link to="/todolist">TODOLIST</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
