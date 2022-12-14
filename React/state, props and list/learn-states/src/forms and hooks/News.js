import React from "react";
import "./News.css";

function News({ news }) {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      {/* below line on clicking on read more a new page will open with that url link */}
      <button onClick={() => window.open(news.url)}>Read more</button>
    </div>
  );
}

export default News;
