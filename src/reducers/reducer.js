import todos from './todo_reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({todos});

export default reducer;
