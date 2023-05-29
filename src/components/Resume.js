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
                <div>
                    <p>HTML / CSS</p>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>React.js</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                    <p>GraphQL</p>
                    <p>Git</p>
                    <p>Heroku</p>
                    <p>Bootstrap</p>
                    <p>jQuery</p>
                    <p>RESTful APIs</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;