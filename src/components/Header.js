import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

// the header component includes the navigation bar

function Header() {
    const [currentPage, handlePageChange] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case "Home":
                return <Home />;
            case "Contact":
                return <Contact />;
            case "Portfolio":
                return <Portfolio />;
            case "Resume":
                return <Resume />;
            
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <a href="https://github.com/dannynvn" className="logo">Danny Nguyen</a>

            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            <main>
                {renderPage(currentPage)}
            </main>
        </div>
    );
}

export default Header;