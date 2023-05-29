import React from "react";
import Project from "./Project";


// projects array
const projects = [
    {
        id: 0,
        image: "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg",
        title: "Social Network API",
        description: "Back end for a social network web application.",
        github:"https://github.com/dannynvn/project-social_network_api",
        deployed:"#"
    },
    {
        id: 1,
        image: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg",
        title: "Text Editor",
        description: "Text editor application.",
        github:"https://github.com/dannynvn/project-text_editor"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/270549/pexels-photo-270549.jpeg",
        title: "E-Commerce Back End",
        description: "Back end for an e-commerce site.",
        github:"https://github.com/dannynvn/project-E_Commerce_Back_End"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1191244/pexels-photo-1191244.jpeg",
        title: "CLI Employee Tracker",
        description: "Command line application that manages a company's employees.",
        github:"https://github.com/dannynvn/project-CLI_Employee_Tracker"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/1060901/pexels-photo-1060901.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Express Note Taker",
        description: "Note taker built with Express.js.",
        github:"https://github.com/dannynvn/project-Express_Note_Taker"
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/544947/pexels-photo-544947.jpeg",
        title: "Weather Dashboard",
        description: "Weather dashboard that runs in the browser and features dynamically updated HTML and CSS.",
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