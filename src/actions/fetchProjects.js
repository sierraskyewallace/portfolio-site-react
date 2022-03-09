
export function fetchProjects() {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/projects");
        const projects = await response.json();
        return dispatch({
            type: 'FETCH_PROJECTS',
            payload: projects
        });
    }
}
