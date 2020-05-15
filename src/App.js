//Dependencies
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

//Component Imports
import Header from "../src/components/Header"
import Body from "../src/components/Body"



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
