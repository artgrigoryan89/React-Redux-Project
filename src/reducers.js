import { combineReducers } from 'redux';
import { user } from './module/user_module';

const rootReducer = combineReducers({
    base: user,
});

export default rootReducer;
