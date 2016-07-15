
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// short hand property names
// same as courses: courses
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;


 