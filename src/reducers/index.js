import { combineReducers } from 'redux';
import articles from './articles';
import tags from './tags';
import searchResults from './searchResults';

export default combineReducers({
  articles,
  tags,
  searchResults
});
