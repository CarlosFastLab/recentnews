import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';
import News from './components/News';
import Header from './components/Header';

export default function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newsPerPage] = useState(3);
  const [currentPage] = useState(1);
  const [filters] = useState([
    { category: 'sports', label: 'SPORTS', active: true },
    { category: 'politics', label: 'POLITICS', active: false },
    { category: 'business', label: 'BUSINESS', active: false },
    { category: 'technology', label: 'TECH', active: false },
    { category: 'regional', label: 'REGIONAL', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function loadNews() {

      setLoading(true);
      const response = await api.get(`/latest-news`, {
        params: {
          language: 'en',
          category: filters[filterIndex].category,
          apiKey: process.env.REACT_APP_API_KEY,
        }
      });

      setNews(response.data.news);
      setLoading(false);

    }

    loadNews();

  }, [filters, filterIndex]);


  function handleFilter(e) {
    setFilterIndex(e.target.value);
  }

  // Get current news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <Header handleFilter={handleFilter} />
      <hr />
      <h1 className="filtered-news-title">RECENT NEWS</h1>
      <News news={currentNews} loading={loading} />
    </>
  );
}
