import React from "react";
import PropTypes from "prop-types";
import style from "./news.css";
import InfiniteScroll from "react-infinite-scroll-component";

// TODO: didn't have to time to handle errors in this component.
// Think about what might happen if news data is undefined or fetch data is failed
// do some validation
const News = ({ news, getNews }) => (
  <div className={style["news"]}>
    <h1 className={style["top_news"]}>Top News</h1>
    <InfiniteScroll
      dataLength={news.length}
      next={getNews}
      hasMore={true}
      loader={<h4>LOADING ...</h4>}
    >
      {news.map((n, idx) => {
        let formatDate = new Date(n.publishedAt).toLocaleDateString();
        return (
          <div key={idx} className={style["single-news"]}>
            <h2 className={style["single_news_title"]}>{n.title}</h2>
            <h3 className={style["single_news_author"]}>{n.author}</h3>
            <p className={style["single_news_description"]}>{n.description}</p>
            <p className={style["single_news_published"]}>
              <strong>Published:</strong> {formatDate}
            </p>
          </div>
        );
      })}
    </InfiniteScroll>
  </div>
);

News.propTypes = {
  news: PropTypes.instanceOf(Array),
};

export default News;
