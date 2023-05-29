import React from "react";
import profilePic from "../assets/images/profilepic.jpg";

// The About component is the entry point for the About page / about me section
function About() {
    return (
        <div className="content-container" style={{ marginTop: 20 }}>
            <p style={{ marginBottom: 50, fontSize: 20 }}>
                Hello! I'm a software developer based in the San Francisco Bay Area, CA. 
                <br/> 
                <br/>
                I am a digital builder and enjoy creating accessible, dynamic environments for a broad array of users.
                <br/> 
                <br/>
                When I'm not building, you can find me on exploring trails around the Bay Area, or traveling for new experiences. I have two feline furbabies named Meeko and Whiskey. Meeko's the rule follower and Whiskey is the troublemaker. 
            </p>
            <img src={profilePic} className="img-fluid" alt="danny nguyen" style={{ paddingLeft: 50, paddingRight: 50 }}/>
        </div>
    );
}

export default About;