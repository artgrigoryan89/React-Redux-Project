import { combineReducers } from 'redux';
import { loginReducer } from './module'

const rootReducer = combineReducers({
  user: loginReducer
});

export default rootReducer;
