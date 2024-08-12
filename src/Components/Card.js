import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="row">
            {data && data.length > 0 ? (
                data.map((article, index) => {
                    // Check if the article has an image, if not, return null
                    if (!article.urlToImage) return null;

                    return (
                        <div key={index} className="col-md-6 col-lg-4 ">
                            <div className="card-content" style={{ marginBottom: '20px' }}>
                                <img src={article.urlToImage} alt="Article" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-3">{article.title}</h5>
                                    <p className="card-text text-secondary">{article.description}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="button"> <span class="text">Read...</span><svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No news articles found.</p>
            )}
        </div>
    )
}

export default Card
