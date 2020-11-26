import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import logo from './assets/logo@2x.png'
import News from './components/News';

export default function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newsPerPage, setNewsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState([
    { category: 'sports', label: 'SPORTS', active: false },
    { category: 'politics', label: 'POLITICS', active: false },
    { category: 'business', label: 'BUSINESS', active: false },
    { category: 'technology', label: 'TECH', active: false },
    { category: 'regional', label: 'REGIONAL', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function loadNews() {

      setLoading(true);

      const response = await axios.get(`https://api.currentsapi.services/v1/latest-news`, {

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

  function handleFilter(index) {
    setFilterIndex(index);
  }

  // Get current news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <header className="nav">
        <img className="nav__img" src={logo} alt="logo" />
        <div className="nav__buttons" active={filterIndex}>
          {filters.map((filter, index) => (
            <button className="nav__button" type="button" key={filter.id} onClick={() => handleFilter(index)}>{filter.label}</button>
          ))}
            <button className="nav__login-button">LOGIN</button>
        </div>
      </header>


        <h1 className="filtered-news-title">Noticias filtradas</h1>
        <News news={currentNews} loading={loading} />


      <hr />

      <div>
        <h1>Notícias que não são filtradas</h1>
      </div>
    </>
  );
}
