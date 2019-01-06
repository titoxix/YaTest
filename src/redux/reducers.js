import { combineReducers } from 'redux';
import User from './User/reducer';
import General from './General/reducer';
import Search from './Search/reducer';


export default combineReducers({
  User,
  General,
  Search
})