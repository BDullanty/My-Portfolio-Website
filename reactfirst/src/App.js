import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Education from "./pages/Education";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        
        <Route path="/education" element = {<Education/>} />
      </Routes>
    </Router>
  );
}

export default App;
