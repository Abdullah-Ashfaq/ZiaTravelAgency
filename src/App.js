import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import './App.css';
import Home from "./Pages/Home";
import Packages from "./Pages/Packages";

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="packages" element = {<Packages/>} />
        </Routes>
      </Router>
   </>
    
  );
}

export default App;
