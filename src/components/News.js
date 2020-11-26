import React from 'react';

const News = ({ news, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <section className="card-container">
            {news.map(news => (
                <div className="filtered-news-card" key={news.id}>
                    <p className="filtered-news-card__category">{news.category}</p>
                    <img className="filtered-news-card__image" src={news.image} alt={news.title} />
                    <div className="filtered-news-card__body">
                        <h3 className="filtered-news-card__title">{news.title}</h3>
                        <span className="filtered-news-card__author">by {news.author}</span>
                        <p className="filtered-news-card__description">{news.description}</p>                        
                    </div>
                </div>
            ))}
        </section>
    )
}

export default News;