import React from "react";

// the navigation bar is the header of the page

function Navigation(props) {
    const tabs = ["About", "Contact", "Portfolio", "Resume"];

    return (
        <div>
            <ul className="nav nav-tabs">
                {tabs.map(tab => (

                    // creates list items for each tab
                    <li 
                        className={ props.currentPage === tab ? "nav-item active" : "nav-item" } 
                        key={tab}>
                        
                        {/* handles navigating between each tab */}
                        <a 
                            href={"#" + tab.toLowerCase()} 
                            onClick={() => props.handlePageChange(tab)} 
                            className="nav-link"> 
                            {tab} 
                        </a>

                    </li>
                ))}
            </ul>
        </div>
                
    )
}

export default Navigation;