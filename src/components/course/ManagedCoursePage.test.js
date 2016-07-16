import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

// import the raw class
import {ManageCoursePage} from './ManageCoursePage';


describe ('Manage Course Page', ()  => {
    it('sets error message when trying to save empty title', () => {
        // that does not work:
        // const wrapper = mount(<ManageCoursePage />);

        // wrapp the component in a provider component
        // used when testing redux-connect behaviour
//        const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);

        // export the raw component
        // add 'export' to ManageCoursePage and do a named import
        // set props to the component manualy (because mapStateToProps() is not called)


        const props = {
            authors:[],
            course: {id:'', watchHref:'', title:'', authorId:'', length:'', category:''},
            actions: { saveCourse: () => { return Promise.resolve(); } }
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);

        // get save button
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');

        // click on the button
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});



