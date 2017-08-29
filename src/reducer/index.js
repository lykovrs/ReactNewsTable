import {combineReducers} from 'redux';
import countReducer from './counter';
import articlesReducer from './articles';

export default combineReducers({
    count: countReducer,
    articles: articlesReducer
});