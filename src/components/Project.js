import React from "react";

// project prop to be passed into the Portfolio component

function Project(props) {
    return (
        <div>
            <div className="project-container">
                {props.projects.map(project => (
                    <div>
                        <div className="project-card">
                            <div className="card-image" target="_blank" rel="noreferrer">
                                <figure>
                                    <a href={project.github}>
                                        <img src={process.env.PUBLIC_URL + project.image} className="img-fluid img-thumbnail" alt="placeholder" />
                                    </a>
                                </figure>
                                <p key={project.id}>
                                    {project.title}
                                </p>
                                <p key={project.id}>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default Project;