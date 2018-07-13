import { combineReducers } from 'redux';
import { loginReducer } from './module';
import { adminReducer } from './module';

const rootReducer = combineReducers({
  user: loginReducer,
  base: adminReducer,
});

export default rootReducer;
