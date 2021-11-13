import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import News from "./components/news";
import { getNews } from "./redux/actions";

const App = ({ getNews, news }) => {
  useEffect(() => {
    getNews();
  }, []);

  console.log(news);
  return <News news={news.news} getNews={getNews} />;
};

const mapStateToProps = function (state) {
  return {
    news: state.news,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(getNews()),
  };
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(MainApp);

App.propTypes = {
  getNews: PropTypes.func,
  news: PropTypes.instanceOf(Array),
};
