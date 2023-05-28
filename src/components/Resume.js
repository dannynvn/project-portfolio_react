import React from "react";
import myResume from "../assets/Danny_Nguyen-Resume.pdf"
import { BsCloudDownload } from "react-icons/bs";

// resume page with downloadable resume

function Resume() {
    return (
        <div className="content-container">
            <h1>Resume</h1>

            <a href={myResume} className="download-logo" download>
                <BsCloudDownload /> Download
            </a>

            <h3 style={{ marginTop: 50 }} >
                Proficiencies
            </h3>

            <div>
                <ul>
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                    <li>Git</li>
                    <li>Heroku</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>RESTful APIs</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;