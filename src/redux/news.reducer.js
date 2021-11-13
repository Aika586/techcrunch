import { DATA_LOAD_SUCCESS, DATA_LOAD_FAILURE } from "./news.types";

// TODO: didn't have to time to handle errors better.
const INITIAL_STATE = {
  news: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD_SUCCESS:
      return {
        ...state,
        news: [...state.news, ...action.payload],
      };

    case DATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
