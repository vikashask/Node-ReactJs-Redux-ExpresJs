import { combineReducers } from 'redux';
import allDataReducer from './allDataReducer';

const rootReducer = combineReducers({
    allData:        allDataReducer,
});

export default rootReducer;