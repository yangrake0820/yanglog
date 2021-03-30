import React from 'react';
import 'antd/dist/antd.css';
import MovieSearch from './container/MovieSearch';
import './component/MovieCard.scss';

const Api = () => {
    return (
        <div className="movie">
            <MovieSearch />
        </div>
    );
};

export default Api;
