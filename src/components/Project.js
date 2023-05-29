import React from "react";


// project prop to be passed into the Portfolio component

function Project(props) {
    return (
        <div>
            <div className="project-container">
                {props.projects.map(project => (
                    <div key={project.id}>
                        <div className="project-card">
                            <div className="card-image" target="_blank" rel="noreferrer">
                                <figure>
                                    <a href={project.github}>
                                        <img src={project.image} className="img-fluid img-thumbnail" alt="placeholder" />
                                    </a>
                                </figure>
                                <a href={project.github}>
                                    {project.title}
                                    <br/>
                                    <br/>
                                </a>
                                <p>
                                    {project.description}
                                </p>
                                {/* placeholder github link for deployed site */}
                                <p>
                                    <a href={project.github}>Live site</a>
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