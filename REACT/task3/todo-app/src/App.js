import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
