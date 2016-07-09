import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);

    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1> 
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input  
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.tilte} />
                <input  
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes =  {
//    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
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
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

// when add mapDispatchToProps to connect, than
// this.props.dispatch is no longer injected
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
