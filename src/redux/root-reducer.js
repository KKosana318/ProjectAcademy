import { combineReducers } from 'redux';

import ArticleReducer from './articles/article.reducer';

export default combineReducers({
  articles: ArticleReducer
});