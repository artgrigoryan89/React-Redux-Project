import { combineReducers } from 'redux';
import { loginReducer } from './module/user_module';
import { adminReducer } from './module/user_module';

const rootReducer = combineReducers({
    base: loginReducer,
});

export default rootReducer;
