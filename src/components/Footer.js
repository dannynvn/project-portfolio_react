import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

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
                <a href="https://linkedin.com/">
                    <li className="logo">
                        <AiOutlineLinkedin />
                    </li>
                </a>
                <a href="https://stackoverflow.com/">
                    <li className="logo">
                        <BsStackOverflow />
                    </li>
                </a>
            </div>
        </footer>
    );        
};

export default Footer;