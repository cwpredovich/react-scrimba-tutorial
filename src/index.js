// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

// imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));
