import React from "react";


const Projects = (props) => {
    return (
        <div className="container">
            <div class="row">
            {props.projects.map(project => {
                return (
                    <div key={project.id}>
                        <h4>{project.name}</h4>
                        <image src={project.image_url} />
                        <p>{project.github_url} hide this as "github link"</p>
                        <p>{project.description}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

         


export default Projects;
