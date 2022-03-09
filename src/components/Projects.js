import React from "react";


const Projects = (props) => {
    return (
        <div>
            {props.projects.map(project => {
                return (
                    <div>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                )

            }
            )}
        </div>
    )
}
export default Projects;
