import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    return (
        <div className="news-item">
            <div className="news-item-header">
                <span className="badge">{source}</span>
            </div>
            <img src={imageUrl || 'https://via.placeholder.com/150'} alt="news" className="news-item-image" />
            <div className="news-item-body">
                <h5 className="news-item-title">{title}</h5>
                <p className="news-item-description">{description}</p>
                <p className="news-item-meta">
                    <small>By {author || 'Unknown'} on {new Date(date).toLocaleDateString()}</small>
                </p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
