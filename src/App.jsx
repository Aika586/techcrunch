import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";
import News from "./components/news";
import { getNews } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const news = useSelector((news) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return <News news={news} getNews={getNews} />;
};

export default hot(App);

App.propTypes = {
  getNews: PropTypes.func,
  news: PropTypes.instanceOf(Array),
};
