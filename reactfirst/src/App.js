import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Education from "./pages/Education";
import HireMe from "./pages/HireMe";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/education" element = {<Education/>} />
        <Route path="/HireMe" element = {<HireMe/>} />
      </Routes>
    </Router>
  );
}

export default App;
