import React, { Fragment, useState } from 'react';
import { Input, Row, Col } from 'antd';
import MovieCard from '../component/MovieCard';
import jsonData from './item.json';
import axios from 'axios';

const { Search } = Input;

const MovieSearch = () => {
    const [query, setQuery] = useState('');

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const [items, setItems] = useState();

    const handleButton = async () => {
        const id = 'fL5n79Up3QPwUzn_Bw1t';
        const secret = 'ef3yMkSsJK';
        try {
            const res = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
                headers: {
                    'X-Naver-Client-Id': id,
                    'X-Naver-Client-Secret': secret,
                },
                params: {
                    query: query,
                },
            });
            console.log(res);
            if (res && res.status === 200) {
                const { data } = res;
                setItems(data.items);
            }
        } catch (e) {
            console.log('error', e);
        }
    };

    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <Search
                    placeholder="영화 검색을 해보세요!"
                    onChange={handleQuery}
                    onClick={handleButton}
                    style={{ width: 200 }}
                />
            </div>
            <div>
                <Row>
                    {jsonData.items.map((item) => {
                        return (
                            <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                                <MovieCard item={item}></MovieCard>;
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Fragment>
    );
};
export default MovieSearch;
