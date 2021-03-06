import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions'; 


// action creator
export function loadCoursesSuccess(courses) {
    // same als , course: course
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) { 
    return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function updateCourseSuccess(course) { 
    return { type: types.UPDATE_COURSE_SUCCESS, course };
} 

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then( courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
        .then( savedCourse => {
            if (course.id) {
                dispatch(updateCourseSuccess(savedCourse));
            } else {
                dispatch(createCourseSuccess(savedCourse));           
            }
        }).catch(error => {
            dispatch(ajaxCallError(error));                      
            throw(error);
        });
    };
}