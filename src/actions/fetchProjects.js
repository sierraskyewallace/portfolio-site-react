
export function fetchProjects() {
    return (dispatch) => {
        return fetch('hhtp://localhost:3000/projects')
            .then(response => response.json())
            .then(projects => dispatch({
                type: 'FETCH_PROJECTS',
                payload: projects
            }));
    }
}
