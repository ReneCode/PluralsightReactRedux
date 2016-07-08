
import {combineReducers} from 'redux';
import courses from './courseReducer';

// short hand property names
// same as courses: courses
const rootReducer = combineReducers({
    courses
});

export default rootReducer;


 