import React from "react";
import Project from "./Project";


// projects array
const projects = [
    {
        id: 0,
        image: "https://via.placeholder.com/150",
        title: "Project 1",
        description: "This is a description of project 1.",
    },
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        title: "Project 2",
        description: "This is a description of project 2.",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        title: "Project 3",
        description: "This is a description of project 3.",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        title: "Project 4",
        description: "This is a description of project 4.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        title: "Project 5",
        description: "This is a description of project 5.",
    },
    {
        id: 5,
        image: "https://via.placeholder.com/150",
        title: "Project 6",
        description: "This is a description of project 6.",
    }
];

// pulls in the project array from src/components/Project.js
function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                <Project projects={projects} />
            </div>
        </div>
    );
}

export default Portfolio;