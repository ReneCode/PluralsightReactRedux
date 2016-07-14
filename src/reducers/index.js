
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// short hand property names
// same as courses: courses
const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;


 