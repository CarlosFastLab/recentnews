import React, { useState, useEffect } from 'react';
import api from '../src/services/api';
import './App.css';

export default function Main() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const response = await api.get(`/v1/latest-news`, {
                params: {
                    per_page: 5
                }
            });
            setNews(response.data);
        }

        loadNews();
        // console.log(news);

    }, [news]);

    return (
        <div className="App">
            <h1>Estou funcionando!</h1>
            <div>
                {/* {news.map((singleNews) => ())} */}
            </div>
        </div>
    );
}
