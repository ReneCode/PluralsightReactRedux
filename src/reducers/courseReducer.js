
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // spread operator ES6
            debugger;
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}