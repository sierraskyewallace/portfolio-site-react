import React from "react";


const Projects = (props) => {
    return (
        <div>
            {props.projects.map(project => {
                return (
                    <div key={project.id}>
                        <h1>{project.name}</h1>
                        <image src={project.image_url} />
                        <p>{project.github_url} hide this as "github link"</p>
                        <p>{project.description}</p>
                    </div>
                )

            }
            )}
        </div>
    )
}
export default Projects;
