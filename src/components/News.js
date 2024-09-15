import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    const apiKey = process.env.REACT_APP_GNEWS_API;

    const fetchNews = async () => {
        setLoading(true);
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}&page=${page}&max=10`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(prevArticles => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
        setLoading(false);
    };

    useEffect(() => {
        fetchNews();
        // eslint-disable-next-line
    }, [page]);

    const fetchMoreData = () => {
        setPage(page + 1);
    };

    return (
        <div className="news-container">
            <h1 className="text-center">Top {category} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="news-items">
                    {articles.map(article => (
                        <NewsItem
                            key={article.url}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.image}
                            newsUrl={article.url}
                            author={article.source.name}
                            date={article.publishedAt}
                            source={article.source.name}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default News;
