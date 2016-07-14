import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router'; 

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Courses</h1> 
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

CoursesPage.propTypes =  {
//     dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
//    createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired

};

// state is the new state and we define
// what to do with it
// here we store the state in this.props.courses
// so that render() can take that state via this.props.courses
function mapStateToProps(state, ownProps) {
    // state.courses is the courseReducer
     return {
        courses: state.courses
    };
}

// dispatch is a function
function mapDispatchToProps(dispatch) {
    // arrow function (a,b) => {...}
    // when only one parameter than
    // a => ...
    // is possible
    //
    // use createCourse in onClickSave()
    return {
//        createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
//        createCourse: bindActionCreators(courseActions.createCourse, dispatch)
    };
}

// when add mapDispatchToProps to connect, than
// this.props.dispatch is no longer injected
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
