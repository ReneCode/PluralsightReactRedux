import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
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
        return courseApi.getAllCourses().then( courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        return courseApi.saveCourse(course)
        .then( savedCourse => {
            if (course.id) {
                dispatch(updateCourseSuccess(savedCourse));
            } else {
                dispatch(createCourseSuccess(savedCourse));           
            }
        }).catch(error => {
            throw(error);
        });
    };
}