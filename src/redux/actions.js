import axios from "axios";
import { DATA_LOAD_SUCCESS, DATA_LOAD_FAILURE } from "./news.types";

// TODO: Go to https://newsapi.org/ and get your own API Key and replace below with that.
// Currently using Ulan's
const API_KEY = "4db85ba2af6e48a98960903be51608b0";
const NEWS_API = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

export const getNews = () => {
  return function (dispatch) {
    return axios
      .get(NEWS_API)
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: DATA_LOAD_SUCCESS,
          payload: data.articles,
        });
      })
      .catch((err) => {
        dispatch({
          type: DATA_LOAD_FAILURE,
          payload: err.message,
        });
      });
  };
};
