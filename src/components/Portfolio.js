import React from "react";
import Project from "./Project";
import proj1 from "../assets/images/proj1.jpg";
import proj2 from "../assets/images/proj2.jpg";
import proj3 from "../assets/images/proj3.jpg";
import proj4 from "../assets/images/proj4.jpg";
import proj5 from "../assets/images/proj5.jpg";
import proj6 from "../assets/images/proj6.jpg";


// projects array
const projects = [
    {
        id: 0,
        image: proj1,
        title: "Social Network API",
        description: "Back end for a social network web application.",
        github:"https://github.com/dannynvn/project-social_network_api",
        deployed:"#"
    },
    {
        id: 1,
        image: proj2,
        title: "Text Editor",
        description: "Text editor application.",
        github:"https://github.com/dannynvn/project-text_editor"
    },
    {
        id: 2,
        image: proj3,
        title: "E-Commerce Back End",
        description: "Back end for an e-commerce site.",
        github:"https://github.com/dannynvn/project-E_Commerce_Back_End"
    },
    {
        id: 3,
        image: proj4,
        title: "CLI Employee Tracker",
        description: "Command line application that manages a company's employees.",
        github:"https://github.com/dannynvn/project-CLI_Employee_Tracker"
    },
    {
        id: 4,
        image: proj5,
        title: "Express Note Taker",
        description: "Note taker built with Express.js.",
        github:"https://github.com/dannynvn/project-Express_Note_Taker"
    },
    {
        id: 5,
        image: proj6,
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