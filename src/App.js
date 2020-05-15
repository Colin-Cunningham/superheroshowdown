//Dependencies
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

//Component Imports
import Body from "../src/components/Body"
import Navbar from "../src/components/Navbar"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Body />
      </Router>
    </div>
  );
}

export default App;
