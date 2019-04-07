import { combineReducers } from 'redux';

import list from './list/reducer';
import detail from './detail/reducer';

export default combineReducers({
  list,
  detail,
});