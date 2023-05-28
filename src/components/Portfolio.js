import React from "react";
import Project from "./Project";


// projects array
const projects = [
    {
        id: 0,
        image: "https://via.placeholder.com/150",
        title: "Social Network API",
        description: "This is a description of project 1.",
        github:"https://github.com/dannynvn/project-social_network_api"
    },
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        title: "Text Editor",
        description: "This is a description of project 2.",
        github:"https://github.com/dannynvn/project-text_editor"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        title: "E-Commerce Back End",
        description: "This is a description of project 3.",
        github:"https://github.com/dannynvn/project-E_Commerce_Back_End"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        title: "CLI Employee Tracker",
        description: "This is a description of project 4.",
        github:"https://github.com/dannynvn/project-CLI_Employee_Tracker"
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        title: "Express Note Taker",
        description: "This is a description of project 5.",
        github:"https://github.com/dannynvn/project-Express_Note_Taker"
    },
    {
        id: 5,
        image: "https://via.placeholder.com/150",
        title: "Weather Dashboard",
        description: "This is a description of project 6.",
        github:"https://github.com/dannynvn/project-weather_dashboard"
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