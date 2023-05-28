import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

// the footer links to my socials at the bottom of the page

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-name">
                <p>
                    Made by Danny Nguyen.
                </p>  
                <a href="https://github.com/dannynvn">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                </a>
            </div>
        </footer>
    );        
};

export default Footer;