export default function appReducer(state = {projects:[]}, action) {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return {
                projects: action.payload
            };
        case 'FETCH_PROJECT':
            return {
                project: action.payload
            };
        default:
            return state;

    }


    
}
