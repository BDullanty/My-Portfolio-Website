import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Education from "./pages/Education";
import HireMe from "./pages/HireMe";
import Projects from "./pages/Projects";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/Education" element = {<Education/>} />
        <Route path="/HireMe" element = {<HireMe/>} />
        <Route path="/Projects" element = {<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
