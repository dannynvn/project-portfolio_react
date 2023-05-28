import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// The ReactDOM.render() method is used to render a React element into the DOM 
// in the supplied container and return a reference to the component 
// (or returns null for stateless components).
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);