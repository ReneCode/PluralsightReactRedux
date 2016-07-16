import expect from 'expect';
import * as actions from '../actions/courseActions';
import courseReducer from './courseReducer';


describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () =>  {
        const initialState =  [
            {title:'A'},
            {title:'B'}
        ];
        const newCourse = {title:'C'};
        const action = actions.createCourseSuccess(newCourse);
        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        const initialState =  [
            {id:'a', title:'A'},
            {id:'b', title:'B'},
            {id:'c', title:'C'}
        ];
        const course = {id:'b', title:'New Title-B'};
        const action = actions.updateCourseSuccess(course);
        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'a');

        expect(newState.length).toEqual(3);
        expect(updatedCourse.title).toEqual('New Title-B');
        expect(untouchedCourse.title ).toEqual('A');

    });
});